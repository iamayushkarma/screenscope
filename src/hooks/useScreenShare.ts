import { useState, useRef, useEffect } from "react";
import type { ScreenShareStatus } from "../types/screen.types";
import toast from "react-hot-toast";

type ScreenMetadata = {
  width?: number;
  height?: number;
  frameRate?: number;
  displaySurface?: string;
};

export function useScreenShare() {
  const [status, setStatus] = useState<ScreenShareStatus>("idle");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<ScreenMetadata | null>(null);

  const isSupported = !!navigator.mediaDevices?.getDisplayMedia;
  const streamRef = useRef<MediaStream | null>(null);

  const cleanup = (updateStatus = true) => {
    if (!streamRef.current) return;
    streamRef.current.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setStream(null);
    setMetadata(null);
    if (updateStatus) setStatus("stopped");
  };
  useEffect(() => {
    return () => cleanup(false);
  }, []);

  const startSharing = async () => {
    if (!navigator.mediaDevices?.getDisplayMedia) {
      setStatus("unsupported");
      toast.error("Screen sharing is not supported on this browser.");
      return;
    }

    try {
      setStatus("requesting");
      setError(null);
      cleanup(false);

      const mediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: { ideal: 30 } },
        audio: false,
      });

      const track = mediaStream.getVideoTracks()[0];
      const settings = track.getSettings();

      setMetadata({
        width: settings.width,
        height: settings.height,
        frameRate: settings.frameRate,
        displaySurface: settings.displaySurface,
      });

      track.onended = () => {
        streamRef.current?.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
        setStream(null);
        setStatus("stopped");
      };

      streamRef.current = mediaStream;
      setStream(mediaStream);
      setStatus("granted");
    } catch (err: any) {
      if (err.name === "AbortError") {
        setStatus("cancelled");
        toast("Screen selection cancelled.");
      } else if (err.name === "NotAllowedError") {
        setStatus("denied");
        toast.error("Permission denied for screen sharing.");
      } else {
        setStatus("error");
        setError(err.message);
        toast.error("Unexpected error occurred.");
      }
    }
  };

  return {
    status,
    stream,
    metadata,
    error,
    isSupported,
    startSharing,
    stopSharing: cleanup,
  };
}
