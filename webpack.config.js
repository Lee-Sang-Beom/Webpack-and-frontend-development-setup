// node에서 제공하는 path모듈
// 파일이나 폴더의 경로작업을 위한 기능제공
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'js'), // "현재경로 하위에 js폴더를 만들고"
    filename: 'main.js', // output으로 main.js라는 파일을 만들어놓음
  },
  module: {
    rules:[
        {
            test: /\.css$/, // 확장자가 css일 때
            use: ["style-loader", "css-loader"] //css-loader로 읽고, style-loader로 적용
        }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
        template: './index.html' 
    }),
  ],
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'js') // 파일경로 작성
    },
    port: 8080, // 서버구동포트
  }
};
