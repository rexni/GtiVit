import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Add Tailwind CSS plugin
    {
      name: 'tailwindcss',
      config() {
        return {
          css: {
            postcss: {
              plugins: [tailwindcss()],
            },
          },
        };
      },
    },
  ],
});
