module.exports = {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      })
  
      return config
    },
  }