import { ArrowRight, CheckCircle, Monitor, AlertCircle } from "lucide-react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useScreenShare } from "../../hooks/useScreenShare";

function HeroSection() {
  const navigate = useNavigate();
  const { isSupported, status } = useScreenShare();

  const handleStart = () => {
    if (!isSupported) return;
    navigate("/screen-test");
  };

  return (
    <section className="relative mt-16 overflow-hidden flex items-center justify-center h-dvh">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />

        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 10% 10%, #dbeafe 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 90% 90%, #ede9fe 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Pill badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-white text-xs font-bold uppercase tracking-wider text-primary mb-8">
          <Monitor className="size-3" />
          Browser Screen Diagnostics
        </span>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-text-primary tracking-tight leading-[1.1] mb-6 max-w-3xl">
          Test Your Screen Sharing in Seconds
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
          Verify browser permissions, check resolution, and monitor your stream
          - all locally, nothing uploaded.
        </p>

        {/* CTA */}
        <Button
          className={`group ${
            !isSupported ? "opacity-60 cursor-not-allowed" : ""
          }`}
          disabled={status === "requesting"}
          onClick={handleStart}
        >
          Start Diagnostics
          <ArrowRight className="size-4 transition-all ease-in duration-200 group-hover:translate-x-0.5" />
        </Button>

        {/* Trust strip */}
        <div className="flex items-center justify-center gap-2 mt-6 text-xs font-medium flex-wrap text-text-muted">
          <span className="flex items-center gap-1">
            <CheckCircle className="size-3.5 text-success" />
            No account required
          </span>

          <span>·</span>
          <span>Chrome & Edge</span>

          <span>·</span>

          {/* Support Status Badge */}
          <span
            className={`flex items-center gap-1 px-2 py-0.5 rounded-full border font-semibold
              ${
                isSupported
                  ? "bg-green-50 text-green-600 border-green-200"
                  : "bg-red-50 text-red-600 border-red-200"
              }`}
          >
            {isSupported ? (
              <>
                <CheckCircle className="size-3" />
                Supported
              </>
            ) : (
              <>
                <AlertCircle className="size-3" />
                Unsupported device
              </>
            )}
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
