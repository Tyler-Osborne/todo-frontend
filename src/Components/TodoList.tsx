import React, {Component} from "react";
import Todo from "../Models/Todo";
import {getTodos} from "../Services/TodoService";
import TodoItem from "./TodoItem";
import {Space} from "antd";
import TodoForm from "./TodoForm";

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
        this.setState({todos, loading: false});
    }

    render() {
        return (
            <div>
                <h2>This is a todo list</h2>
                {this.state.loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <>
                    <TodoForm />
                        <Space direction="vertical" style={{width: 300}}>
                            {this.state.todos.map((todo: Todo) =>
                                <TodoItem todo={todo}/>
                            )}
                        </Space>
                    </>
                )}
            </div>
        );
    }
}

export default TodoList;
