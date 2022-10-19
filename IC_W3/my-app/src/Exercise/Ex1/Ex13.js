import React, { Component } from 'react';
import MyButton from './MyButton';

const Ex13 = () => {
    function render({ second }){
        render(
            <main>
                <MyButton />
                <MyButton text={second.text} disabled={second.disabled} />
            </main>
        );
    }
    render({
        second:{
            text:"Second Button",
            disabled: true,
        },
    })
}

export default Ex13;