import React, { Component } from 'react';
import { Wrapper, Icon } from './styles';

export default class ToggleCheckBox extends Component {
    render = () => {
        return (
<Wrapper onClick={this.props.onClick}>
{
    this.props.checked?
    <Icon className="fas fa-check-square"style={{ color: '#4caf50'}} />:
    <Icon className="far fa-square"/>
}
</Wrapper>

            );
    }

}