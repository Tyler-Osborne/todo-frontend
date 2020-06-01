import React, {Component} from 'react';
import {Space as Cel, Card, Checkbox} from 'antd';
import Todo from "../Models/Todo";
import styles from "./styles.module.css"

interface TodoProp {
    todo: Todo;
}

class TodoItem extends Component<TodoProp> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: TodoProp) {
        super(props);
    }

    render() {
        return (
            <Cel className="gutter-ro">
                <Card title={this.props.todo.title} className={styles.todoCard}>
                    <p>Description</p>
                    <p>{this.props.todo.description}</p>
                    <p>Complete? <Checkbox defaultChecked={this.props.todo.complete} disabled /></p>
                </Card>
            </Cel>
        );
    }
}

export default TodoItem;