export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        /* Primary */
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          soft: "var(--color-primary-soft)",
        },

        /* Background */
        background: {
          DEFAULT: "var(--color-background)",
          secondary: "var(--color-background-secondary)",
          muted: "var(--color-background-muted)",
        },

        /* Text */
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },

        /* Border */
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },

        /* Status */
        status: {
          success: "var(--color-success)",
          warning: "var(--color-warning)",
          error: "var(--color-error)",
          info: "var(--color-info)",
        },
      },
    },
  },
};
