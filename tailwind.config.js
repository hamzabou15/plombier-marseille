/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  extend: {
    colors: {
      primary: {
        DEFAULT: "#43926b",
        light: "#0099D1",
        dark: "#005f87",
      },
      accent: "#F5A623",
      neutral: {
        50: "#f7f9fa",
        100: "#eef2f5",
        300: "#cbd5e1",
        500: "#6b7a8c",
        700: "#374151",
      },
      text: {
        DEFAULT: "#212121",
        muted: "#6b7a8c",
      },
      surface: "#ffffff",
      border: "#e2e8f0",
      success: "#16a34a",
      error: "#dc2626",
    },
    fontSize: {
      h1: ["2.75rem", { lineHeight: "1.1", fontWeight: "700" }], // ~44px
      h2: ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }], // ~36px
      h3: ["1.75rem", { lineHeight: "1.3", fontWeight: "600" }], // ~28px
      base: ["1rem", { lineHeight: "1.6" }], // 16px
      lg: ["1.125rem", { lineHeight: "1.6" }], // 18px
      sm: ["0.875rem", { lineHeight: "1.4" }], // 14px
    },
    spacing: {
      section: "4rem",
      card: "1.5rem",
    },
    borderRadius: {
      DEFAULT: "1rem",
    },
  },
};
export const plugins = [
  // base typography / design system defaults
  plugin(function ({ addBase, theme }) {
    addBase({
      "body": {
        fontFamily: "system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif",
        backgroundColor: theme("colors.neutral.50"),
        color: theme("colors.text.DEFAULT"),
      },
      "h1": {
        fontSize: theme("fontSize.h1")[0],
        lineHeight: theme("fontSize.h1")[1].lineHeight,
        fontWeight: theme("fontSize.h1")[1].fontWeight,
        color: theme("colors.text.DEFAULT"),
      },
      "h2": {
        fontSize: theme("fontSize.h2")[0],
        lineHeight: theme("fontSize.h2")[1].lineHeight,
        fontWeight: theme("fontSize.h2")[1].fontWeight,
        color: theme("colors.text.DEFAULT"),
      },
      "h3": {
        fontSize: theme("fontSize.h3")[0],
        lineHeight: theme("fontSize.h3")[1].lineHeight,
        fontWeight: theme("fontSize.h3")[1].fontWeight,
        color: theme("colors.text.DEFAULT"),
      },
      "p": {
        fontSize: theme("fontSize.base")[0],
        lineHeight: theme("fontSize.base")[1].lineHeight,
        color: theme("colors.text.DEFAULT"),
      },
      "small": {
        fontSize: theme("fontSize.sm")[0],
        color: theme("colors.text.muted"),
      },
      "a": {
        color: theme("colors.primary.DEFAULT"),
        fontWeight: "600",
        textDecoration: "none",
      },
    });
  }),
  // optional: custom component utilities
  plugin(function ({ addComponents, theme }) {
    addComponents({
      ".btn-primary": {
        backgroundColor: theme("colors.primary.DEFAULT"),
        color: "#fff",
        fontWeight: 600,
        padding: `${theme("spacing.3")} ${theme("spacing.6")}`,
        borderRadius: theme("borderRadius.DEFAULT"),
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
        transition: "background-color .2s",
        "&:hover": {
          backgroundColor: theme("colors.primary.dark"),
        },
      },
      ".btn-outline": {
        backgroundColor: "transparent",
        border: `2px solid ${theme("colors.primary.DEFAULT")}`,
        color: theme("colors.primary.DEFAULT"),
        fontWeight: 600,
        padding: `${theme("spacing.3")} ${theme("spacing.6")}`,
        borderRadius: theme("borderRadius.DEFAULT"),
        transition: "background-color .2s, color .2s",
        "&:hover": {
          backgroundColor: `${theme("colors.primary.DEFAULT")}20`,
        },
      },
      ".card": {
        backgroundColor: theme("colors.surface"),
        borderRadius: theme("borderRadius.DEFAULT"),
        padding: theme("spacing.card"),
        boxShadow: "0 12px 32px rgba(0,0,0,0.04)",
        border: `1px solid ${theme("colors.border")}`,
      },
    });
  }),
];
