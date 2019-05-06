import React from 'react';
import './block.css';
class Block extends React.Component {
    constructor () {
        super()
    }
    render() {
        return (
            <div className="gantt-block">
                {this.props.children}
            </div>
        )
    }
}
export default Block;
