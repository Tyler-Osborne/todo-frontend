import React, { Component } from "react";
import Todo from "../Models/Todo";
import { getTodos } from "../Services/TodoService";

interface TodoListState {
  todos: Todo[];
  loading: boolean;
}

class TodoList extends Component<any, TodoListState> {
  state = {
    todos: [],
    loading: true,
  };

  async componentDidMount() {
    let todos = await getTodos();
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <h2>This is a todo list</h2>
      </div>
    );
  }
}

export default TodoList;
