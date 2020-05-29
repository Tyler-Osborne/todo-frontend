import React, {Component} from "react";
import Todo from "../Models/Todo";

class TodoList extends Component {
    state = {
        todos: [],
        loading: true
    }

    async componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <h2>This is a Todo list</h2>
            </div>
        );
    };
}

export default TodoList;