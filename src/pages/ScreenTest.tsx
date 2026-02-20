import {
  Monitor,
  PlayCircle,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import Button from "../components/ui/Button";
import { useScreenShare } from "../hooks/useScreenShare";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function ScreenTest() {
  const { status, stream, metadata, isSupported, startSharing, stopSharing } =
    useScreenShare();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.srcObject = stream ?? null;
  }, [stream]);

  return (
    <section className="grow flex flex-col items-center justify-center p-6 relative overflow-hidden min-h-[calc(100vh-4rem)]">
      {/* Background blobs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none -z-10"
        style={{
          background: "radial-gradient(ellipse, #dbeafe 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none -z-10"
        style={{
          background: "radial-gradient(ellipse, #ede9fe 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="w-full max-w-3xl flex flex-col gap-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-medium text-text-secondary">
            <span
              className={`w-2 h-2 rounded-full ${
                status === "granted"
                  ? "bg-green-500 animate-pulse"
                  : status === "requesting"
                    ? "bg-amber-400 animate-pulse"
                    : status === "denied" ||
                        status === "error" ||
                        status === "cancelled"
                      ? "bg-red-400"
                      : "bg-text-muted"
              }`}
            />
            {status === "idle" && "System Idle"}
            {status === "requesting" && "Requesting Permission"}
            {status === "granted" && "Stream Active"}
            {status === "stopped" && "Stream Stopped"}
            {status === "cancelled" && "Cancelled"}
            {status === "denied" && "Permission Denied"}
            {status === "error" && "Error"}
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-text-primary">
            Screen Share Diagnostic
          </h1>
          <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto">
            Verify your browser's screen capturing capabilities before your next
            session.
          </p>
        </div>

        {/* Diagnostic Card */}
        <div className="bg-white rounded-xl border border-border p-8 md:p-12 text-center">
          {/* Idle */}
          {status === "idle" && (
            <div className="flex flex-col items-center gap-8">
              <div className="w-24 h-24 bg-primary-soft rounded-full flex items-center justify-center border border-border">
                <Monitor className="text-primary size-10" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary">
                  Ready to test screen sharing
                </h2>
                <p className="text-sm text-text-secondary mt-1">
                  Click below to begin. Nothing is uploaded or recorded.
                </p>
              </div>
              {isSupported && (
                <Button onClick={startSharing}>
                  <PlayCircle className="size-4" />
                  Start Screen Test
                </Button>
              )}
            </div>
          )}

          {/* Requesting */}
          {status === "requesting" && (
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
              <p className="text-text-secondary font-medium">
                Waiting for screen selection...
              </p>
            </div>
          )}

          {/* Granted */}
          {status === "granted" && stream && (
            <div className="space-y-6">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full aspect-video rounded-lg border border-border bg-black"
              />
              {metadata && (
                <div className="text-left text-sm space-y-2 bg-gray-50 rounded-lg p-4 border border-border">
                  <p className="font-semibold text-text-primary mb-3">
                    Stream Details
                  </p>
                  <p className="flex justify-between">
                    <span className="text-text-secondary">Status</span>
                    <span className="font-medium text-green-600">Active</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-text-secondary">Display Type</span>
                    <span className="font-medium">
                      {metadata.displaySurface ?? "Unknown"}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-text-secondary">Resolution</span>
                    <span className="font-medium">
                      {metadata.width} × {metadata.height}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-text-secondary">Frame Rate</span>
                    <span className="font-medium">
                      {metadata.frameRate} fps
                    </span>
                  </p>
                </div>
              )}
              <Button onClick={stopSharing}>Stop Sharing</Button>
            </div>
          )}

          {/* Stopped */}
          {status === "stopped" && (
            <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center border border-green-200">
                <CheckCircle className="text-green-500 size-10" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary">
                  Test Complete
                </h2>
                <p className="text-text-secondary text-sm mt-1">
                  Your screen sharing worked successfully.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap justify-center">
                <Button onClick={startSharing}>
                  <PlayCircle className="size-4" />
                  Test Again
                </Button>
                <Button onClick={() => navigate("/")}>Back to Home</Button>
              </div>
            </div>
          )}

          {/* Not Supported */}
          {!isSupported && (
            <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center border border-red-200">
                <XCircle className="text-red-400 size-10" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary">
                  Not Supported
                </h2>
                <p className="text-text-secondary text-sm mt-1">
                  Screen sharing is not supported on this device or browser. Try
                  Chrome or Edge.
                </p>
              </div>
              <Button onClick={() => navigate("/")}>Back to Home</Button>
            </div>
          )}

          {/* Cancelled / Denied / Error */}
          {(status === "cancelled" ||
            status === "denied" ||
            status === "error") && (
            <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center border border-amber-200">
                <AlertTriangle className="text-amber-500 size-10" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary">
                  {status === "cancelled" && "Selection Cancelled"}
                  {status === "denied" && "Permission Denied"}
                  {status === "error" && "Something Went Wrong"}
                </h2>
                <p className="text-text-secondary text-sm mt-1">
                  {status === "cancelled" &&
                    "You closed the screen picker without selecting a source."}
                  {status === "denied" &&
                    "Browser permission was denied. Check your browser settings and try again."}
                  {status === "error" &&
                    "An unexpected error occurred. Please try again."}
                </p>
              </div>
              <div className="flex gap-3 flex-wrap justify-center">
                <Button onClick={startSharing}>
                  <PlayCircle className="size-4" />
                  Retry
                </Button>
                <Button onClick={() => navigate("/")}>Back to Home</Button>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center text-xs text-text-muted gap-2">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="size-3.5 text-success" />
              Chromium Engine Detected
            </div>
            <div className="font-mono">v1.0.0</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScreenTest;
