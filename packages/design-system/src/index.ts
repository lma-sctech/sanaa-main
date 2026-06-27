export const themes = {
  "premium-travel": {
    background: "#f6f0e6",
    foreground: "#241f24",
    accent: "#b55735",
    deep: "#2a202b",
    gold: "#d4aa56",
  },
  main: {
    background: "#fffaf2",
    foreground: "#1f1b1f",
    accent: "#b8943e",
    deep: "#211a22",
    gold: "#d4aa56",
  },
} as const;

export type ThemeToken = keyof typeof themes;
