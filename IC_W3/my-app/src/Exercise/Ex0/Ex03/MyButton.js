import React, { Component } from 'react';

class MyButton extends Component {
    render() {
        return (
            <div>
                <button>{this.props.children}</button>
            </div>
        );
    }
}

export default MyButton;