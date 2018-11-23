import React, { Component, Fragment } from 'react';
//引入react为了解析jsx语法

// import {Component} from 'react';
// 等价于
// import React from 'react';
// const Component = React.Component;
// 使用的是es6的解构赋值
//class 类 =》使组件app继承了react的compont的方法，这样就构建了一个组件

import './style.css';
import TodoItem from './TodoItem';
//return加上括号可以多行写html标签
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'alidr',
      list: ['w', 'z', 'c']
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleLi = this.handleLi.bind(this);
    this.handleLiDel = this.handleLiDel.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="input">输入：</label>
          <input type="text"
            id='input'
            value={this.state.inputValue}
            onChange={this.handleInput} />
          <button onClick={this.handleLi}>添加</button>
        </div>
        <div>
          {this.getTodo()}
        </div>
      </Fragment>
    );
  }
  getTodo(){
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key = {index}
          liItem={item}
          liIndex={index}
          handleLiDel={this.handleLiDel}
        />
      )
    })
  }
  handleInput(e) {
    //新版本配合Es6(return 对象的简写)
    const value = e.target.value
    this.setState(()=>({
        inputValue: value
      }))
    //新版本(this》state是一个异步函数)
    // const value = e.target.value
    // this.setState(()=>{
    //   return{
    //     inputValue: value
    //   }
    // })
    //旧版本
    // this.setState({
    //   inputValue: e.target.value
    // })
  }
  handleLi() {
    if (this.state.inputValue) {
      //this.setState可以接受一个参数prevState,即上一个状态的变量值
      //可以用来代替this.state
      this.setState((prevState)=>({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ""
      }))
      // this.setState({
      //   list: [...this.state.list, this.state.inputValue],
      //   inputValue: ""
      // })
    }
  }
  handleLiDel(index) {
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    })
    // this.setState({
    //   list: list
    // })
  }
}

export default App;
