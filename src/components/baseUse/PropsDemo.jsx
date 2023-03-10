/*
 * @Date: 2023-03-10 10:27:42
 * @LastEditors: pengheyan
 * @LastEditTime: 2023-03-10 10:43:58
 * @FilePath: \react-basics-exercise\src\components\baseUse\PropsDemo.jsx
 */
import React from "react";
import PropTypes from 'props-types'

class Input extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title:''
    }
  }

  render(){
    return <div>
        <input value={this.state.title} onChange={this.onTitleChange} />
        <button onClick={this.onSubmit}>提交</button>
    </div>
  }

  onTitleChange = (e)=>{
    this.setState({
      title:e.target.value
    })
  }
}

Input.protoTypes = {
  submitTitle:ProtoTypes.func.isRequired
}