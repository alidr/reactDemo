//index.js 整个程序的入口文件
//jsx语法
import React from 'react';
//第三方模块
//把react生成的组件挂载到某一个节点下并显示出来
import ReactDOM from 'react-dom';
//react思想：all in js
// import './index.css';

//一个组件
import App from './App';
//PWA 
//支持https协议的服务器
//用来存储访问的页面以便现实时显示
// import * as serviceWorker from './serviceWorker';

//ReactDom.render 一个方法
//<App/> jsx语法啊
ReactDOM.render( < App / > , document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();