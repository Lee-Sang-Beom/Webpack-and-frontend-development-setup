
## 1. 프로젝트 계획 이유
 -  webpack을 이용하여 프론트 개발 환경을 세팅하는 방법을 정리하기 위해 계획하였습니다.


****
# 2. Install and Use
## 2.1. npm 패키저
* npm 패키저를 초기화합니다.
    ```
    npm init
    ```

## 2.2. webpack
* 모듈 번들러 webpack을 설치합니다.
    ```
    npm i webpack webpack-cli --save-dev
    ```

## 2.3. webpack.config.js
* webpack 사용을 위한, 환경 파일을 만듭니다.
    ```
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

    ```
## 2.4. package.json
* webpack 실행을 위해, script를 일부 수정합니다.
    ```
      "scripts": {
        "build": "webpack", // 추가
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```