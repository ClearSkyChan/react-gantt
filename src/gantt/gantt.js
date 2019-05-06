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
                        {
                            this.state.indexes.map((value, index) => {
                                return (
                                    <div key={index} className="gantt-index">{value}</div>
                                )
                            })
                        }
                    </div>
                    <div className="gantt-content" onScroll={this.onScroll}>
                        {
                            this.state.indexes.map((value, index) => {
                                return (
                                    <div key={index} className="gantt-row" style={ganttRowStyle}>
                                    </div>
                                )
                            })
                        }
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
export default Gantt;
