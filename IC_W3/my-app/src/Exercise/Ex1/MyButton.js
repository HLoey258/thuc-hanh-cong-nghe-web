import React, { Component } from 'react';

const MyButton = ({disabled , text }) => {
    <button disabled={disabled}>{text}</button>
}
MyButton.defaultProps = {
    text: "my btn",
    disabled: false,
}
export default MyButton;