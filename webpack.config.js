

var config = {
   entry: './Test1/src/index.js',

   output: {
      path:'/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8082,
      historyApiFallback: true

   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,

            loader: 'babel-loader',



            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.(gif|svg|jpg|png)$/,
            loader: "file-loader",
          },
         {
           test: /\.(s*)css$/,
           use: [
             {
               loader: "style-loader",
             }, {
               loader: "css-loader",
             }, {
               loader: "sass-loader",
             }


           ]
         }
      ]


   }
}

module.exports = config;
