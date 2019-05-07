import React from 'react';
import './gantt.css';
class Gantt extends React.Component {
    constructor() {
        super()
        this.state = {
            times: [],
            indexes: []
        }
        for (let i = 0; i < 24; i++) {
            this.state.times.push(i);
        }
        for (let i = 0; i < 24; i++) {
            this.state.times.push(i);
        }
        for (let i = 0; i < 100; i++) {
            this.state.indexes.push(i);
        }
    }
    onScroll(event,y){
        console.log(event.target.scrollTop,)
        var scrollLeft = event.target.scrollLeft;
        var scrollTop = event.target.scrollTop;
        document.getElementsByClassName('gantt-header')[0].scrollLeft = scrollLeft
        document.getElementsByClassName('gantt-content-locked')[0].scrollTop = scrollTop
    }
    render() {
        var rowWidth = this.state.times.length * 60
        var ganttRowStyle = {
            width:rowWidth +'px'
        }
        return (
            <div className="gantt">
                <div className="gantt-header-wrapper">
                    <div className="gantt-header-locked">
                    </div>
                    <div className="gantt-header">
                        {
                            this.state.times.map((value, index) => {
                                return (
                                    <div key={index} className="gantt-header-cell">{value +":00"}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="gantt-content-wrapper">
                    <div className="gantt-content-locked">
                            {this.props.indexs}
                    </div>
                    <div className="gantt-content" onScroll={this.onScroll}>
                            {this.props.blocks}
                    </div>
                </div>
            </div>
        )
    }
}

class Side extends React.Component {
    render() {
        return (
            <div className="side">
                {this.props.children}
            </div>
        )
    }
}

class Block extends React.Component {
    render() {
        return (
            <div className="gantt-block">
                {this.props.children}
            </div>
        )
    }
}


class Task extends React.Component {
    render() {
        const taskStyle = {
            left: (this.props.left||0) + 'px',
            width:(this.props.width||40) + 'px',
            top:this.props.top
        }
        return (
            <div className={this.props.className + " task "} style={taskStyle}>
                    {this.props.children}
            </div>
        )
    }
}

export {Gantt,Side,Block,Task};