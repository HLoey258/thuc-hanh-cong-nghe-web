import React, { Component } from 'react';

class Ex1_1 extends Component {
    state = {
        heading: "React...",
        content: "Loading...",
    };
    constructor(){
        super();
        
        setTimeout(() => {
            this.setState({
                heading: "React..done",
                content: "Done..",
            });
        }, 3000)
    }
    render() {
        const { heading , content } = this.state;
        return (
            <div>
                <h1>{heading}</h1>
                <p>{content}</p>
            </div>
        );
    }
}

export default Ex1_1;