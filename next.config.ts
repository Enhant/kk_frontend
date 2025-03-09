// eslint-disable-next-line @typescript-eslint/no-require-imports
const withImages = require("next-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/kk_frontend", // Укажи имя репозитория
  assetPrefix: "/kk_frontend/",
  images: {
    unoptimized: true, // Отключает оптимизацию изображений (иначе они не будут работать на GitHub Pages)
  },
};

module.exports = withImages(nextConfig);
