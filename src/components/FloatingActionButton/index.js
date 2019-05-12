import React, { Component } from 'react';
import { Wrapper, Icon } from './styles';

export default class FloatingActionButton extends Component {
    render = () => {
        return (
            <Wrapper onClick={this.props.onClick}>
                <Icon className={this.props.icon} />
            </Wrapper>
        );
    }
}

