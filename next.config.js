/**
 * @type {import('next').NextConfig}
 */

// const nextConfig = {
//   output: "export",
//   images: {
//     loader: "akamai",
//     path: "",
//   },
//   assetPrefix: "./",
// };
const nextConfig = {
  output: "export",
  // images: {
  //   loader: "akamai",
  //   path: "/out",
  // },
};
module.exports = {
  ...nextConfig,
  images: {
    domains: ["openweathermap.org"],
  },
};
