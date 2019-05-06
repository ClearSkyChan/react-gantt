import React from 'react';
import './task.css';
class Task extends React.Component {
    render() {
        const taskStyle = {
            left: (this.props.left||0) + 'px',
            width:(this.props.width||40) + 'px',
            top:(this.props.top||0) +'px'
        }
        return (
            <div className={this.props.className + " task "} style={taskStyle}>
                    {this.props.children}
            </div>
        )
    }
}
export default Task;
