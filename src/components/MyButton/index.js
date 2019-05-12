import React, { Component } from 'react';
import { Wrapper } from './styles';

export default class MyButton extends Component {
    render = () => {
        return (
            <Wrapper
                style={this.props.style}
                onClick={this.props.onClick}>
                {
                    this.props.label || 'Click Me'
                }
            </Wrapper>
        );
    }
}
