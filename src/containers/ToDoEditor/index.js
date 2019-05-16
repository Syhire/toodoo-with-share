import React, { Component } from 'react';
import InputWithTitle from '../../components/InputWithTitle';
import AppBar from '../../components/AppBar';
import {
  Wrapper, ContentArea,
  Column, TaskTitle,
  RoundedButton, RoundedButtonIcon,
  TaskHeaderRow, TaskEditorRow
} from './styles';
import MyButton from '../../components/MyButton';

export default class ToDoEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      title: '',
      location: '',
      due: '',
      tasks: [],
      share: []
    }

    if (props.location.state
      && props.location.state.data) {
      const editedTodo = props.location.state.data;

      this.state = {
        isEdit: true,
        id: editedTodo.id,
        title: editedTodo.title,
        location: editedTodo.location,
        due: editedTodo.due,
        tasks: editedTodo.tasks,
        share: editedTodo.share
      }
    }
  }
  

  _goBack = () => {
    this.props.history.goBack();
  }

  _onChange = (field, value) => {
    this.setState({ [field]: value })
  }

  _addTask = () => {
    const length = this.state.tasks.length;

    let id = 1;
    if (length > 0) id = (Number(this.state.tasks[length - 1].id) + 1).toString();

    const tempTasks = [...this.state.tasks];
    tempTasks.push({ id: id, content: '', isDone: false });

    this.setState({ tasks: tempTasks });
  }

  _onChangeTask = (id, value) => {
    const tempTask = [...this.state.tasks];
    const index = tempTask.findIndex(t => t.id === id);

    if (index >= 0) {
      tempTask[index].content = value;
      this.setState({ tasks: tempTask });
    }
  }

  _onDeleteTask = (id) => {
    const tempTask = [...this.state.tasks];
    const index = tempTask.findIndex(t => t.id === id);

    if (index >= 0) {
      tempTask.splice(index, 1);
      this.setState({ tasks: tempTask });
    }
  }

  _onSave = () => {
    let updatedTodos = [];


    if (this.props.location.state && this.props.location.state.todos) {
      updatedTodos = this.props.location.state.todos;
    }
    // Changes

    if (this.state.isEdit) {
      const updatedTodo = updatedTodos.find(t => t.id === this.state.id);
      updatedTodo.title = this.state.title;
      updatedTodo.location = this.state.location;
      updatedTodo.due = this.state.due;
      updatedTodo.tasks = this.state.tasks;
      updatedTodo.share = this.state.share;
    } else {
      const length = updatedTodos.length;

      let id = 1;
      if (length > 0) id = (Number(updatedTodos[length - 1].id) + 1).toString();

      updatedTodos.push({
        id: id,
        title: this.state.title,
        location: this.state.location,
        due: this.state.due,
        subtitle: "Tasks",
        tasks: this.state.tasks,
        share: []
      });
    }
    // Changes

    // Tell react router (library-nya) utk pindah halaman
    // ke '/' (home) dengan membawa data todos yang sudah di update.
    this.props.history.push({
      pathname: '/',
      state: {
        todos: updatedTodos
      }
    })
  }

  render() {
    return (
      <Wrapper>
        <AppBar
          icon="fas fa-arrow-left"
          title="Add New ToDo"
          onClickIcon={() => this._goBack()} />
        <ContentArea>
          <Column>
            <InputWithTitle
              onChange={(v) => this._onChange('title', v)}
              style={{ margin: '16px' }}
              title='Title'
              value={this.state.title} />
            <InputWithTitle
              onChange={(v) => this._onChange('location', v)}
              style={{ margin: '16px' }}
              title='Location'
              value={this.state.location} />
            <InputWithTitle
              onChange={(v) => this._onChange('due', v)}
              style={{ margin: '16px' }}
              title='Due'
              value={this.state.due} />
            <MyButton
              onClick={this._onSave}
              style={{ 'marginLeft': '16px' }} label='Save' />
          </Column>
          <Column>
            <TaskHeaderRow>
              <TaskTitle>Tasks</TaskTitle>
              <RoundedButton onClick={this._addTask}>
                <RoundedButtonIcon><i className='fas fa-plus' /></RoundedButtonIcon>
              </RoundedButton>
            </TaskHeaderRow>
            {
              this.state.tasks.map(t => (
                <TaskEditorRow key={t.id}>
                  <RoundedButton style={{ backgroundColor: '#F44336', boxShadow: '0 2px #D32F3F' }}
                    onClick={() => this._onDeleteTask(t.id)}>
                    <RoundedButtonIcon><i className='fas fa-trash' /></RoundedButtonIcon>
                  </RoundedButton>

                  <InputWithTitle
                    style={{ flex: 1 }}
                    title={`Task ${t.id}`}
                    value={t.content}
                    onChange={(v) => this._onChangeTask(t.id, v)} />
                </TaskEditorRow>
              ))
            }
          </Column>
        </ContentArea>
      </Wrapper>
    );
  }
}