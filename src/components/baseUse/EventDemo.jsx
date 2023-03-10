/*
 * @Date: 2023-03-09 17:04:15
 * @LastEditors: pengheyan
 * @LastEditTime: 2023-03-09 17:30:58
 * @FilePath: \react-basics-exercise\src\components\baseUse\EventDemo.jsx
 */
import React from "react";

class EventDemo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name:'zhangsan',
      list:[
        {
          id:'id-1',
          title:'标题1'
        },
        {
          id:'id-2',
          title:'标题2'
        },
        {
          id:'id-3',
          title:'标题3'
        }
      ]
    }

    //修改方法的this指向
    this.clickHandler1 = this.clickHandler1.bind(this)
  }

  render(){
    
    //this-使用bind
    // return <p onClick={this.clickHandler1}>
    //   {this.state.name}
    // </p>

    // //this-使用静态方法
    // return <p onClick={this.clickHandler2}>
    //   {this.state.name}
    // </p>

    // //event
    // return <a href="http://baidu.com" onClick={this.clickHandler3}>click me</a>

    //传递参数-用bind（this,a,b)
    return <ul>
      {this.state.list.map((item,index)=>{
        return <li key={item.id} onClick={this.clickHandler4.bind(this,item,id,item.title)}>
          index{index};title{item.title}
        </li>
      })}
    </ul>

  }

  clickHandler1(){
    console.log('this',this) //this默认是undefined
    this.setState({
      name:'list'
    })
  }

  //静态方法 this指向当前实例
  clickHandler2 = ()=>{
    this.setState({
      name:'list'
    })
  }

  //获取event
  clickHandler3 = (event)=>{
    event.preventDefault(); //阻止默认行为
    event.stopPropagation(); //阻止冒泡

    console.log('target',event.target) //指向当前元素，即当前元素触发
    console.log('current target',event.currentTarget) //指向当前元素，假象！！

    console.log('event',event) //注意：event其实是React封装的，可以看__proto__.constructor是SyntheticEvent（模拟dom事件所有能力)
    //原生event是MouseEvent

    console.log('nativeEvent',event.nativeEvent)
    console.log('nativeEvent target',event.nativeEvent.target) //指向当前元素，即当前元素触发
    console.log('nativeEvent current target',event.nativeEvent.currentTarget)

    //react17版本之后事件绑定到root
    //react16版本是绑定到document
    //有利于多个React版本并存，例如微前端
  }

  //传递参数
  clickHandler4(id,title,event){
    console.log(id,title);
    console.log('event',event)//最后追加一个参数，即可接收event
  }
}

export default EventDemo