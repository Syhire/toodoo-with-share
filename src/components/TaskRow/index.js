import React, { Component } from 'react';
import ToggleCheckBox from '../ToggleCheckBox';
import { Wrapper, Content } from './styles';

export default class TaskRow extends Component {
    render = () => {
        return (
<Wrapper>
    <ToggleCheckBox
    onClick = {this.props.onToggle}
    checked = {this.props.completed}/>

<Content>{this.props.content}</Content>
</Wrapper>

        );
    }
}