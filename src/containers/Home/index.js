import React, { Component } from 'react';
import { Wrapper, ContentArea } from './styles';
import FloatingActionButton from '../../components/FloatingActionButton';
import AppBar from '../../components/AppBar';
import ToDoCard from '../../components/ToDoCard';

// Luarnya class
const dummyData = [{
  id: '1',
  title: "judul 1",
  due: "kemaren",
  location: "smak 1",
  subtitle: "sub 1",
  tasks: [{
    id: '1',
    content: "content 1 pertama",
    isDone: false
  }, {
    id: '2',
    content: "konten 1 kedua",
    isDone: false
  }],
  share: [{
    id: '1',
    name: "mygmail:)@gmail.com",
  }, {
    id: '2',
    name: "1819*****@smak1bpk.penabur.sch.id",
  }, {
    id: '3',
    name: "1819*****@smak1bpk.penabur.sch.id",
  }, {
    id: '4',
    name: "1819*****@smak1bpk.penabur.sch.id",
  }]

}];

export default class Home extends Component {
  constructor(props) {
    super(props);

    /**
     * Kalau di "database" udah ada todos, pakai todos di database,
     * otherwise, pake dummyData (dummyTodos).
     */
    let db = [];

    if (props.location.state && props.location.state.todos) {
      // Todos nya ada, jadi pakai "database" (props.location.state.todos)
      db = props.location.state.todos;
    } else {
      // Artinya, belom ada db
      db = dummyData;
    }

    this.state = {
      todos: db,
    };
  }

  _onToggleTaskCompletion = (ToDoId, taskId) => {
    const tempToDo = [...this.state.todos];

    const selectedToDoIndex = tempToDo.findIndex(todo => todo.id === ToDoId);
    if (selectedToDoIndex < 0) return;
    //---------------------------------------------------
    const selectedTaskIndex = tempToDo[selectedToDoIndex].tasks.findIndex(task => task.id === taskId);
    if (selectedTaskIndex < 0) return;

    const isDoneValue = tempToDo[selectedToDoIndex].tasks[selectedTaskIndex].isDone
    tempToDo[selectedToDoIndex].tasks[selectedTaskIndex].isDone = !isDoneValue; //flip true or false

    this.setState({ todos: tempToDo });
  }

  _addTodo = () => {
    this.props.history.push({
      pathname: '/new',
      state: {
        todos: this.state.todos
      }
    })
  }

  _editTodo = (todo) => {
    this.props.history.push({
      pathname: '/edit',
      state: {
        prevPath: '/',
        data: todo,
        todos: this.state.todos
      }
    });
  }

  _onDelete = (id) => {
    const tempTodos = [...this.state.todos];
    const index = tempTodos.findIndex(t => t.id === id);

    if (index >= 0) {
      tempTodos.splice(index, 1);
      this.setState({ todos: tempTodos });
    }
  }

  _onDeleteShare = (Id, IdIDId) => {
    const tempTodo = [...this.state.todos];
    const index1 = tempTodo.findIndex(id => id.id === Id);
    if (index1 < 0) return;

    const indexindex2 = tempTodo[index1].share.findIndex(idid => idid.id === IdIDId);
    if (indexindex2 >= 0) {
      tempTodo[index1].share.splice(indexindex2, 1);
      this.setState({ todos: tempTodo });
    }
  }
  //lu gk bisa pindah file ?
  _onAddShare = (idss, value) => {
    const temp = this.state.todos[idss].share;
    const length = this.state.todos[idss].share.length;

    let id = 1;
    if (length > 0) id = (Number(this.state.todos[idss].share[length - 1].id) + 1).toString();
    temp.push({ id:id, name: value});
    
    this.setState({ share: temp });
  }
  
  render = () => {
    return (
      <Wrapper>
        <AppBar 
        title="TOODOO" 
        rIcon="fas fa-user"
        onrClick={this._goSharing}
        />
        <ContentArea>
          {
            this.state.todos.map(todo => <ToDoCard
              onAddShare = {this._onAddShare}
              onDelete={() => this._onDelete(todo.id)}
              onClickTitle={() => this._editTodo(todo)}
              key={todo.id}
              value={todo}
              _onToggleTaskCompletion={this._onToggleTaskCompletion}
              _onDeleteShare = {this._onDeleteShare}
              />)
          }
        </ContentArea>
        <FloatingActionButton icon="fas fa-plus"
          onClick={this._addTodo} />
      </Wrapper>
    )
  }
}