import React, { Component } from 'react';

class MyButton_ex12 extends Component {
    render() {
        const { disabled, text } = this.props;
        return <button disabled = {disabled}>{text}</button>
     }
}

export default MyButton_ex12;