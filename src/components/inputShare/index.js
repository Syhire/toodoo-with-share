import React, { Component } from 'react';
import { Wrapper, Input, Button } from './styles';

export default class InputShare extends Component {
    state = { InputValue: ''};

    _onChange = e => { this.setState({ InputValue : e.target.value})}

    render = () => {
        return (
            <Wrapper>
                <Input
                value = {this.props.value}
                onChange = {this._onChange}
                />

                <Button
                onClick = {this.props.onClick}>
                <i class="fas fa-plus-circle"></i> 
                </Button>
            </Wrapper>
        );
    }
}
