import React, { Component } from "react";
import { Modal, Space as Cel, Card, Checkbox, Button } from "antd";
import Todo from "../Models/Todo";
import styles from "./styles.module.css";
import { deleteTodoById } from "../Services/TodoService";

interface TodoProp {
  todo: Todo;
  reload: any;
}

interface TodoState {
  modalVisible: boolean;
}

class TodoItem extends Component<TodoProp, TodoState> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: TodoProp) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  showModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  handleOk = (e: any) => {
    console.log(e);
    this.setState({
      modalVisible: false,
    });
  };

  handleCancel = (e: any) => {
    console.log(e);
    this.setState({
      modalVisible: false,
    });
  };

  deleteTodo = () => {
    if (this.props.todo.id != null && this.props.todo.complete) {
      deleteTodoById(this.props.todo.id).then(() => this.props.reload());
    }
    else {
        this.showModal();
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
          <Modal
            title="Basic Modal"
            visible={this.state.modalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}>
                <p className="styles.dangerDeleteTodo">In order to delete a todo, it must be complete</p>
            </Modal>
        </Card>
      </Cel>
    );
  }
}

export default TodoItem;
