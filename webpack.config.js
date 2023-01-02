// node에서 제공하는 path모듈
// 파일이나 폴더의 경로작업을 위한 기능제공
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'js'), // "현재경로 하위에 js폴더를 만들고"
    filename: 'main.js', // output으로 main.js라는 파일을 만들어놓음
  },
  module: {

  }
};
