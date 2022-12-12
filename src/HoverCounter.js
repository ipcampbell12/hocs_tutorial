import React, { Component } from 'react';

class HoverCounter extends Component {
    render() {

        const { count } = this.state
        return (
            <div>
                <h2 onMouseOver={this.incrementCount}>Hovered {count} Times</h2>
            </div>
        );
    }
}

export default HoverCounter;