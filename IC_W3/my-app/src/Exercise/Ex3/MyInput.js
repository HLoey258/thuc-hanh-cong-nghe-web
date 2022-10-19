import React, { Component } from 'react';

class MyInput extends Component {
    onCharge(){
        console.log("changed");
    }
    onBlur(){
        console.log("blured");
    }
    render(){
        return <input onChange={this.onCharge} onBlur={this.onBlur} />
    }
}
export default MyInput;