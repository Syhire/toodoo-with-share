import React, { Component } from 'react';
import { Wrapper, Icon, Title, LeadingSpace } from './styles';

// 1. Icon bisa ganti >> this.props.icon "fas fa-bars"
// 2. Title bisa ganti >> this.props.title

export default class AppBar extends Component {
    render = () => {
        return (
            <Wrapper>
                {
                    this.props.icon ?
                        <Icon className={this.props.icon}
                            onClick={this.props.onClickIcon} /> :
                        <LeadingSpace />
                }
                <Title>
                    {this.props.title}
                </Title>
            </Wrapper>
        );
    }
}