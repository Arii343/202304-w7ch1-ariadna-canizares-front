/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["./src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "c8",
      all: true,
      reporter: ["lcov", "text"],
      src: ["src"],
      exclude: [
        "**/types.ts",
        "**/*.d.ts",
        "src/components/App/App.tsx",
        "src/main.tsx",
        "src/components/CenteredContainer/*",
        "src/styles/*",
        "src/index.ts",
      ],
    },
  },
});
