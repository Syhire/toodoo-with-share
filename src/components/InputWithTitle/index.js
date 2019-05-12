import React, { Component } from 'react';
import { Wrapper, InputArea, Title } from './styles';

export default class InputWithTitle extends Component {
    render = () => {
        return (
            <Wrapper style={this.props.style}>
                <Title>{this.props.title}</Title>
                <InputArea
                    onChange={(e) => this.props.onChange(e.target.value)}
                    value={this.props.value}/>
            </Wrapper>
        );
    }
}
