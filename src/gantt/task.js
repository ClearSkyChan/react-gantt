import React from 'react';
import './task.css';
class Task extends React.Component {
    constructor () {
        super()
    }
    render() {
        const taskStyle = {
            left:this.props.left+'px'||0,
            width:this.props.width+'px'||40
        }
        return (
            <div className="task" style={taskStyle}>
                    aaa
            </div>
        )
    }
}
export default Task;
