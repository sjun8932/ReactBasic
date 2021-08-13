import React from 'react';
import ReactDom from 'react-dom';
import ResponseCheckHooks from "./ResponseCheck";

ReactDom.render(<ResponseCheckHooks/>, document.querySelector('#root'));

// webpack.config.js 는 node로 돌아가기 때문에 반드시 require 과 module.exports 를 써야하지만
// 이외의 파일은 바벨이 알아서 변환을 해주기 때문에 import 와 export default를  써줘도 된다.