import { CheckCircle, Monitor, AlertCircle } from "lucide-react";
import ShimmerButton from "../ui/ShimmerButton";
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
    <section className="relative md:mt-16 overflow-hidden flex items-center justify-center h-svh">
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-white text-[.7rem] lg:text-xs font-bold uppercase tracking-wider text-primary mb-8">
          <Monitor className="size-3" />
          Browser Screen Diagnostics
        </span>

        <h2 className="text-4xl font-semibold md:text-6xl lg:text-7xl text-text-primary tracking-tight leading-[1.1] mb-6 max-w-3xl">
          Test Your Screen Sharing in Seconds
        </h2>
        <p className="text-[.9rem] md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
          Verify browser permissions, check resolution, and monitor your stream
          - all locally, nothing uploaded.
        </p>
        <ShimmerButton
          shimmer={isSupported}
          className={`group ${!isSupported ? "opacity-60 cursor-not-allowed" : ""}`}
          disabled={status === "requesting"}
          onClick={handleStart}
        >
          Start Diagnostics
        </ShimmerButton>
        <div className="flex items-center justify-center gap-3 mt-6 text-xs font-medium flex-wrap text-text-muted">
          <span className="flex items-center gap-1">
            <CheckCircle className="size-3.5 text-success" />
            No account required
          </span>
          <span>·</span>
          <span>Chrome & Edge</span>
          <span>·</span>
          <span
            className={`flex items-center gap-1 px-2 py-1 rounded-full border font-semibold ${
              isSupported
                ? "bg-green-50 text-green-600 border-green-200"
                : "bg-red-50 text-red-600 border-red-200"
            }`}
          >
            {isSupported ? (
              <>
                <CheckCircle className="size-3" /> Supported
              </>
            ) : (
              <>
                <AlertCircle className="size-3" /> Unsupported device
              </>
            )}
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
