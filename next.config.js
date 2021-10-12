module.exports = {
  // webpack: (config) => {
  //   config.node = {
  //     fs: 'empty'
  //   }
  //   return config
  // }
  webpack5: false,
};

// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.mdx/,
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: '@mdx-js/loader',
//           options: pluginOptions.options,
//         },
//       ],
//     })

//     return config
//   },
// }

