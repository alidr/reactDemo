# react16

感觉react是一个不同于vue的另外一个世界，太灵活了昂~

### react官方脚手架：create-react-app

```

  npm i create-react-app -g

  create-react-app 项目名

  //等待安装好之后

  cd 文件夹名

  npm start

  //ok 一个架子运行起来了

```

##### react思想：all in js,另外一个重要点是jxs语法

### 封装组件

```

import React, { Component,Fragment } from 'react';

//引入react为了解析jsx语法

//Fragment是一个占位符 <span style="color:#ccc">(我理解的类似于vue中的template)</span>,可以用来包裹标签作为一个根标签，因为jsx语法中return返回的是只能为一个标签

// import {Component} from 'react';

// 等价于

// import React from 'react';

// const Component = React.Component;

// 使用的是es6的解构赋值

//class 类 =》使组件app继承了react的compont的方法，这样就构建了一个组件

//return加上括号可以多行写html标签

class App extends Component {

//constructor是每一类里面拥有的构造函数,优先级高于其他的，所以会最先执行

//super(props)调用父类（即Component）的构造函数

//state:组件的状态：用来存储组件里面的数据[react中不允许对state直接做改变，如果一定要改变，那么建议拷贝一份出来对副本修改然后再将值赋给原变量，赋值使用this.setState方法]

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

           value={this.state.inputValue}/>

           <button onClick={this.handleLi.bind(this)}>添加</button>

         </div>

       </Fragment>

     );

  }

}

export default App;

```

React中使用自己封装的组件时，标签的首字母要大写，使用自己的组件就是直接引入，然后<导出的组件名字/>标签直接使用。<span style="color:#ccc">对比vue省掉了组件注册，components:{App}这一块</span>

### 将元素当成HTML标签解析后输出

`<li dangerouslySetInnerHtml={{__html:要解析的内容}}></li>`

<span style="color:#ccc">相当于vue中的v-html</span>注意：双下划线

### 关于原生中关键字的冲突

* 因为es6中=新增的类class,所以在react中将标签上的类名为className;

* 因为js中for循环，所以在label标签中的for要用htmlFor

### 组件之间传值
```
父组件中
	<div>
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
	</div>
子组件
import React,{ Component } from "react";

class TodoItem extends Component{
  constructor(props){
    super(props);
    this.handleLiDel = this.handleLiDel.bind(this)
  }
  render(){
    return <div onClick={this.handleLiDel}>{this.props.liItem}</div>
  }
  handleLiDel(){
    this.props.handleLiDel(this.props.liIndex)
  }
}
export default TodoItem
```
在父组件给子组件传参数的时候，例：liItem={item}，子组件要接受的参数名 = 传入的变量；
子组件接受参数：this.props.liItem
在父组件给子组件传方法的时候，例：handleLiDel={this.handleLiDel.bind(this)}，子组件要接受的参数名 = 传入的方法   <span style="color:#ea6f5a">bind(this)是为了子组件调用时方法的this指向父组件</span>
子组件使用方法：this.props.handleLiDel
