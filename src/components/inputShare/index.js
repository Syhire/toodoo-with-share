import React, { Component } from 'react';
import { Wrapper, Input, Button } from './styles';

export default class InputShare extends Component {
    _onChange = (e) => {
        const {Changes} = this.props
        Changes(e)
    }

    _onClick = () => {
        const {onClicks} = this.props
        onClicks(this.props.test)
    }
    render = () => {
        return (
            <Wrapper>
                <Input
                onChange = {(e) => this._onChange(e.target.value)}
                />

                <Button
                onClick = {this._onClick}>
                <i class="fas fa-plus-circle"></i>
                </Button>
            </Wrapper>
        );
    }
}
