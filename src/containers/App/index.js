import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Wrapper } from './styles';
import Home from '../Home';
import ToDoEditor from '../ToDoEditor';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Wrapper>
                    <Route path='/' component={Home} exact/>
                    <Route path='/new' component={ToDoEditor} />
                    <Route path='/edit' component={ToDoEditor} />
                </Wrapper>
            </BrowserRouter>
        );
    }
}