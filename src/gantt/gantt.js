import React from 'react';
import './gantt.css';
class Gantt extends React.Component {
    constructor() {
        super()
        this.state = { headeCells: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
    }

    render() {
        return (
            <div className="gantt">
                <div className="gantt-header-wrapper">
                    <div className="gantt-header-locked">
                    </div>
                    <div className="gantt-header">
                        {
                            this.state.headeCells.map((value, index) => {
                                return (
                                    <div key={index} className="gantt-header-cell">{value}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="gantt-content-wrapper">
                    <div className="gantt-content-locked">
                        {this.props.children[0]}
                    </div>
                    <div className="gantt-content">
                        {this.props.children[1]}
                    </div>
                </div>
            </div>
        )
    }
}
export default Gantt;
