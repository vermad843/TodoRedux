import React, { Component } from "react";
import {connect} from 'react-redux';
import {actions} from './store';


class App extends Component {
  formSubmitted = (e) => {
    e.preventDefault();
    this.props.onAddTodo({
        title: this.props.newTodo,
        done: false
    });
    this.props.onNewTodoChanged('');
  }


  toggleTodoDone(event, index){
    this.props.onToggleTodoDone({
       index,
       checked : event.target.checked
    })
  }

  removeTodo(index){
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  allDone(){
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });
    this.setState({
      todos
    });
  }

  render() {
    const { heading, todos, newTodo } = this.props;
    return (
      <div>
        <h1>{heading}</h1>
        <form onSubmit={this.formSubmitted}>
          <label htmlFor="newTodo">NewTodo</label>
          <input
            onChange={(e) => this.props.onNewTodoChanged(e.target.value)}
            name="newTodo"
            id="newTodo"
            value={newTodo}
          />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={() => this.allDone()}>All Done</button>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li>
                <input
                  onChange={event => this.toggleTodoDone(event, index)}
                  type="checkbox"
                  checked={todo.done}
                />
                <span
                  style={{
                    textDecoration: todo.done ? "line-through" : "inherit"
                  }}
                >
                  {todo.title}
                </span>
                <button onClick={() => this.removeTodo(index)}>Remove</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
   return {
       heading : state.heading,
       newTodo : state.newTodo,
       todos : state.todos
   }
}

function mapDispatchToProps(dispatch) {
    return {
        onNewTodoChanged(newTodo){
            dispatch(actions.newTodoChanged(newTodo));
        },
        onAddTodo(todo) {
          dispatch(actions.addTodo(todo));
        },
        onToggleTodoDone(toggle) {
          dispatch(actions.toggleTodoDone(toggle));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);