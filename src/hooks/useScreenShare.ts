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

  // Cleanup function (stop and clean up the stream)
  const cleanup = (updateStatus = true) => {
    if (!streamRef.current) return; // If there's no active stream in the ref, do nothing and exit.
    streamRef.current.getTracks().forEach((track) => track.stop()); //Stop all tracks to end the session at the OS level.
    streamRef.current = null;
    setStream(null);
    setMetadata(null);
    if (updateStatus) setStatus("stopped");
  };
  // Runs cleanup function once on every mount
  useEffect(() => {
    return () => cleanup(false);
  }, []);

  // Start haring function
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

      // Browser API call, it opens the screen picker dialog
      const mediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: { ideal: 30 } },
        audio: false, // No system audio captured
      });

      // Gets video track from the stream, then reads its actual settings
      const track = mediaStream.getVideoTracks()[0];
      const settings = track.getSettings();

      setMetadata({
        width: settings.width,
        height: settings.height,
        frameRate: settings.frameRate,
        displaySurface: settings.displaySurface,
      });

      // Listen for the browser's native stop button (not our ui stop button) to reset the UI.
      // This cleans up state and marks the session as "stopped" when the user ends it externally.
      track.onended = () => {
        streamRef.current?.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
        setStream(null);
        setStatus("stopped");
      };

      // Store the active stream and set status to 'granted' to sync the UI.
      streamRef.current = mediaStream;
      setStream(mediaStream);
      setStatus("granted");
    } catch (error: any) {
      if (error.name === "AbortError") {
        setStatus("cancelled");
        toast("Screen selection cancelled.");
      } else if (error.name === "NotAllowedError") {
        setStatus("denied");
        toast.error("Permission denied for screen sharing.");
      } else {
        setStatus("error");
        setError(error.message);
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
