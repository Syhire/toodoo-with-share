import React, { Component } from 'react';
import { Wrapper, Texts, Box, Circle, Circle2 } from './styles';

export default class Names extends Component {
    render = () => {
        return (
            <Wrapper>
                    <Box>
                        <Circle> <i class="fas fa-user-circle"></i> </Circle>

                        <Texts>
                        {this.props.contex}
                        </Texts>

                        <Circle2 onClick = {this.props.onClick}>
                        <i class="fas fa-times-circle"></i> 
                        </Circle2>
                    </Box>
            </Wrapper>
        );
    }
}
