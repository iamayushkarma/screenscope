function StartTestButton() {
  return (
    <>
      <button className="start-test-btn">
        <span className="start-test-text">Start Screen Test</span>
      </button>
      <style>{`
        .start-test-btn {
          position: relative;
          padding: 0.7rem 1.6rem;
          border-radius: 0.5rem;
          background-color: #2563EB;
          border: 1px solid #1d4ed8;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .start-test-text {
          display: inline-block;
          font-weight: 600;
          line-height: 1.2;
          font-size: clamp(0.95rem, 2.5vw, 1.05rem);
          background-image: linear-gradient(
            90deg,
            #ffffff 0%,
            #ffffff 30%,
            #bfdbfe 45%,
            #ffffff 50%,
            #bfdbfe 55%,
            #ffffff 70%,
            #ffffff 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerTextLTR 3.5s linear infinite;
        }
        @keyframes shimmerTextLTR {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .start-test-btn:hover {
          background-color: #1d4ed8;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
          transform: translateY(-1px);
        }
        .start-test-btn:active {
          transform: translateY(0);
        }
        .start-test-btn:focus-visible {
          outline: 2px solid #93c5fd;
          outline-offset: 2px;
        }
        @media (max-width: 640px) {
          .start-test-btn {
            padding: 0.65rem 1.4rem;
          }
          .start-test-text {
            animation-duration: 4.5s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .start-test-text {
            animation: none;
            -webkit-text-fill-color: #ffffff;
          }
        }
      `}</style>
    </>
  );
}

export default StartTestButton;
