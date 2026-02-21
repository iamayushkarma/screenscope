import { AlertTriangle, ShieldCheck, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { NavigateToTop } from "../utils/functions/NavigateToTop";

function Support() {
  const navigate = useNavigate();

  NavigateToTop();

  return (
    <section className="relative mt-16 flex items-center justify-center min-h-[calc(100vh-4rem)] px-6 overflow-hidden">
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

      <div className="max-w-3xl w-full space-y-10 text-center">
        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-black text-text-primary">
            Support
          </h1>

          <p className="text-text-secondary">
            Quick help for common screen sharing issues.
          </p>
        </div>

        {/* Support Card */}
        <div className="bg-white border border-border rounded-xl p-8 text-left space-y-6">
          {/* Supported browsers */}
          <div className="flex gap-3">
            <ShieldCheck className="text-primary size-5 mt-0.5" />
            <div>
              <p className="font-semibold text-text-primary">
                Supported Browsers
              </p>
              <p className="text-sm text-text-secondary">
                Chrome and Edge (Chromium-based) provide best support.
              </p>
            </div>
          </div>

          {/* Permission issue */}
          <div className="flex gap-3">
            <AlertTriangle className="text-amber-500 size-5 mt-0.5" />
            <div>
              <p className="font-semibold text-text-primary">
                Permission Denied
              </p>
              <p className="text-sm text-text-secondary">
                Allow screen sharing when prompted by your browser. If blocked,
                check browser permissions.
              </p>
            </div>
          </div>

          {/* Privacy */}
          <div className="flex gap-3">
            <Info className="text-primary size-5 mt-0.5" />
            <div>
              <p className="font-semibold text-text-primary">Privacy First</p>
              <p className="text-sm text-text-secondary">
                Nothing is recorded, stored, or uploaded. All processing happens
                locally in your browser.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-sm text-text-secondary space-y-2">
          <p>Need additional help?</p>

          <p className="font-medium text-text-primary">
            ayushkarma.dev@gmail.com
          </p>
        </div>

        {/* Back Button */}
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </section>
  );
}

export default Support;
