import axios from 'axios';
import Todo from "../Models/Todo";

const base_url = 'https://tyler-spring-todos.herokuapp.com/api/todos';

export const getTodos = async () => {
    try {
        let response = await axios.get(base_url);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const getTodoById = (id: number) => {

}

export const postTodo = (todo: Todo) => {

}

export const updateTodoById = (todo: Todo) => {

}

export const deleteTodoById = (id: number) => {

}