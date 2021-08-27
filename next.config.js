// module.exports = {
//   reactStrictMode: true,
// };

// next.config.js
const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");

// module.exports = withPlugins([
//   [
//     optimizedImages,
//     {
//       /* config for next-optimized-images */
//     },
//   ],

//   // your other plugins here
// ]);

module.exports = withOptimizedImages({
  handleImages: ["jpeg", "png", "svg"],
});
