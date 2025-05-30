        // vite.config.ts
        import { defineConfig } from "vite";
        import react from "@vitejs/plugin-react";
        import tailwindcss from "@tailwindcss/vite";

        export default defineConfig(({ command, mode }) => {
          let base = '/';
          if (command === 'build' && process.env.DEPLOY_TARGET === 'GITHUB_PAGES') {
            // 👇 这里替换为你的真实仓库名
            base = '/galgame-sedai/';
          }
          // 你可以为 Deno Deploy 或其他平台保留 base = '/' 的默认设置
           else if (command === 'build' && process.env.DEPLOY_TARGET === 'DENO_DEPLOY') {
             base = '/';
           }

          return {
            plugins: [tailwindcss(), react()],
            base: base,
          };
        });
