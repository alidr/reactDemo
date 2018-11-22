import React, { Component,Fragment } from 'react';
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
  constructor(props){
    super(props);
    this.state={
      inputValue:'ali',
      list:['w','z','c']
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="input">输入：</label>
          <input type="text" 
          id='input'
          value={this.state.inputValue}
          onChange={this.handleInput.bind(this)}/>
          <button onClick={this.handleLi.bind(this)}>添加</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return (
                <TodoItem 
                liItem={item}
                liIndex={index}
                handleLiDel={this.handleLiDel.bind(this)}
                /> 
              )
            })
          }
        </ul>
      </Fragment>
    );
  }

  handleInput(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  handleLi(){
    if (this.state.inputValue) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ""
      })
    }
  }
  handleLiDel(index){
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list:list
    })
  }
}

export default App;
