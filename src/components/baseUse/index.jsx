/*
 * @Date: 2023-03-10 09:19:42
 * @LastEditors: pengheyan
 * @LastEditTime: 2023-03-10 10:30:29
 * @FilePath: \react-basics-exercise\src\components\baseUse\index.jsx
 */
import React from 'react'
// import JSXBaseDemo from './JSXBaseDemo'
// import ConditionDemo from './ConditionDemo'
// import ListDemo from './ListDemo'
// import EventDemo from './EventDemo'
// import FormDemo from './FormDemo'
import PropsDemo from './PropsDemo'
// import StateDemo from './StateDemo'
// import StateDemo1 from './StateDemo1'

class BaseUseDemo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            {/* <JSXBaseDemo/> */}
            {/* <ConditionDemo/> */}
            {/* <ListDemo/> */}
            {/* <EventDemo/> */}
            {/* <FormDemo/> */}
            <PropsDemo/>
            {/* <StateDemo/> */}
            {/* <StateDemo1/> */}
        </div>
    }
}

export default BaseUseDemo

// React 组件生命周期图示
// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/