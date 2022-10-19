import React, { Component } from 'react';

class MySection extends Component {
    render() {
        return (
            <div>
                  <section>
                    <h2> My Section</h2>
                    {this.props.children}
                </section>
            </div>
        );
    }
}

export default MySection;