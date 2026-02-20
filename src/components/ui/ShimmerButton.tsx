import type { NavBarType } from "../../types/navbar.types";

const ShimmerButton = ({
  className,
  children,
  disabled,
  onClick,
  shimmer,
}: NavBarType & { shimmer?: boolean }) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${className} ${shimmer ? "shimmer-btn" : ""} cursor-pointer flex gap-2 items-center bg-primary px-4 py-2 rounded-lg font-medium text-sm text-white hover:bg-primary-hover transition-all duration-150 ease-out`}
      >
        {children}
      </button>

      {shimmer && (
        <style>{`
          .shimmer-btn {
            position: relative;
            overflow: hidden;
            border: 1px solid var(--color-primary-hover);
            transition: all 0.3s ease;
          }
          .shimmer-btn::after {
            content: "";
            position: absolute;
            top: -50%;
            left: -100%;
            width: 50px;
            height: 200%;
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(255, 255, 255, 0.08) 20%,
              rgba(255, 255, 255, 0.45) 50%,
              rgba(255, 255, 255, 0.08) 80%,
              transparent 100%
            );
            transform: skewX(-20deg);
            animation: slab-sweep 4s ease-in-out infinite;
          }
          @keyframes slab-sweep {
            0%   { left: -100%; }
            100% { left: 130%; }
          }
          .shimmer-btn:hover {
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
            transform: translateY(-1px);
          }
          .shimmer-btn:active {
            transform: translateY(0);
          }
          .shimmer-btn:focus-visible {
            outline: 2px solid var(--color-primary-soft);
            outline-offset: 2px;
          }
          @media (prefers-reduced-motion: reduce) {
            .shimmer-btn::after { animation: none; }
          }
        `}</style>
      )}
    </>
  );
};

export default ShimmerButton;
