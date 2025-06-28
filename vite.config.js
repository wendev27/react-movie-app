import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  base: "/react-movie-app/", // <-- Make sure this matches your repo name!
  plugins: [react(), tailwindcss(), flowbiteReact()],
});