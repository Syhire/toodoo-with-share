import React, { Component } from 'react';
import { Wrapper, Title, IconBox, Icon, Content, Divider, Subtitle, Row, TitleRow, Boxxes } from './styles';
import TaskRow from '../TaskRow';
import Names from '../PeasantName';
import InputShare from '../inputShare';

export default class ToDoCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: ''
    }
  }
  
  _onAdd = () => {
    const {onAddShare} = this.props
    onAddShare(this.props.value.id, this.state.name)
    console.log('value Card:')
    console.log(this.props.value.id)
  }

  _onChanges = (value) => {
    this.setState ({name: value})
  }

  render = () => {
    return (
      <Wrapper>

        <TitleRow>
          <Title onClick={this.props.onClickTitle}>{this.props.value.title}</Title>
          <IconBox onClick={this.props.onDelete}><Icon style={{ color: '#F44336' }} className="fas fa-trash" /></IconBox>
        </TitleRow>

        <Row>
          <IconBox><Icon className="fas fa-clock" /></IconBox>

          <Content>{this.props.value.due}</Content>
        </Row>

        <Row>
          <IconBox><Icon className="fas fa-map-marker-alt" /></IconBox>
          <Content>{this.props.value.location}</Content>
        </Row>

        <Divider/>
        <Subtitle>{this.props.value.subtitle}</Subtitle>
        {
          this.props.value.tasks.map(task => <TaskRow
          key={task.id}
          content={task.content}
          completed={task.isDone}
          onToggle={() => this.props._onToggleTaskCompletion(this.props.value.id, task.id)} />)
        }

        <Divider/>
            <Subtitle> Share with </Subtitle>
          <Boxxes>
            <InputShare
            Changes = {this._onChanges}
            onClicks = {this._onAdd}
            test = {this.props.value.id}
            />
          {
            this.props.value.share.map(share => <Names
            key = {share.id}
            contex = {share.name}
            Callback = {this._onClick}
            />)
          }
          </Boxxes>

      </Wrapper>
    );

  }
}