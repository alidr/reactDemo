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