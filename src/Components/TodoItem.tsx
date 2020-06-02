import React, { Component } from "react";
import { Space as Cel, Card, Checkbox, Button } from "antd";
import Todo from "../Models/Todo";
import styles from "./styles.module.css";
import { deleteTodoById } from "../Services/TodoService";

interface TodoProp {
  todo: Todo;
  reload: any;
}

class TodoItem extends Component<TodoProp> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: TodoProp) {
    super(props);
  }

  deleteTodo = () => {
    if (this.props.todo.id != null) {
      deleteTodoById(this.props.todo.id).then(() => this.props.reload());
    }
  };

  render() {
    return (
      <Cel className="gutter-ro">
        <Card title={this.props.todo.title} className={styles.todoCard}>
          <p>Description</p>
          <p>{this.props.todo.description}</p>
          <p>
            Complete?{" "}
            <Checkbox defaultChecked={this.props.todo.complete} disabled />
          </p>
          <Button type="primary" danger onClick={this.deleteTodo}>
            Delete
          </Button>
        </Card>
      </Cel>
    );
  }
}

export default TodoItem;
