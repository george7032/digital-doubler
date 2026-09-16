// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Produce a fully static site: `npm run build` renders every page to plain
  // HTML + assets in dist/, ready to upload to any static host (cPanel, etc.).
  nitro: {
    preset: "static",
    output: {
      dir: "dist",
      publicDir: "dist",
    },
    // Nitro accepts these prerender options; the wrapper types are narrower.
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      failOnError: false,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
