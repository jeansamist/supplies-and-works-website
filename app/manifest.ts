import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Supplies and Works",
    short_name: "S&W",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#FCEE21",
    icons: [{ src: "/icon.png", sizes: "64x64", type: "image/png" }, { src: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  };
}
