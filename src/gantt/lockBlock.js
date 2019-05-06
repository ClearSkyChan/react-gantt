import React from 'react';
import './lockBlock.css';
class LockBlock extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="lock-block">
                {this.props.children}
            </div>
        )
    }
}
export default LockBlock;
