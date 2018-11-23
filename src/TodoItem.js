import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleLiDel = this.handleLiDel.bind(this)
  }
  render() {
    const { liItem } = this.props
    return <div onClick={this.handleLiDel}>{liItem}</div>
  }
  handleLiDel() {
    const { liIndex } = this.props
    this.props.handleLiDel(liIndex)
  }
}
export default TodoItem