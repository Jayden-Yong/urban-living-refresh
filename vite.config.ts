// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
 
 export default defineConfig({
   // Disable nitro deploy plugin — we only want static prerender output for cPanel/FTP hosting.
   // Without this, TanStack Start's nitro wrapper generates a server bundle (cloudflare-module
   // preset) that is unnecessary and conflicts with pure static export.
   nitro: false,
   tanstackStart: {
     // Static prerendering — pre-renders all routes to static HTML files for cPanel/FTP hosting.
     // NOTE: prerender runs automatically with `vite build` — no extra step needed.
     prerender: {
       enabled: true,
       crawlLinks: true,
       autoSubfolderIndex: true,
     },
   },
   // Vite-level options — these get merged into the final Vite config via mergeConfig.
   // The `vite` key is required by @lovable.dev/vite-tanstack-config to pass
   // through Vite-specific settings like `base`.
   vite: {
     // Base path for static hosting — site is served from /urban_living/ subdirectory.
     // This ensures JS/CSS assets resolve correctly on cPanel/FTP deployment.
     base: "/urban_living/",
     build: {
       outDir: "dist",
     },
   },
 });
