import React, { Component } from "react";
import { Modal, Space as Cel, Card, Checkbox, Button } from "antd";
import Todo from "../Models/Todo";
import styles from "./styles.module.css";
import { deleteTodoById } from "../Services/TodoService";
import TodoUpdateModal from "./TodoUpdateModal";

interface TodoProp {
  todo: Todo;
  reload: any;
}

interface TodoState {
  modalVisible: boolean;
  updateModalVisible: boolean;
}

class TodoItem extends Component<TodoProp, TodoState> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: TodoProp) {
    super(props);
    this.state = {
      modalVisible: false,
      updateModalVisible: false,
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

  handleUpdate = () => {
    this.setState({
      updateModalVisible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      modalVisible: false,
      updateModalVisible: false,
    });
  };

  deleteTodo = () => {
    if (this.props.todo.id != null && this.props.todo.complete) {
      deleteTodoById(this.props.todo.id).then(() => this.props.reload());
    } else {
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
            <Checkbox
              defaultChecked={this.props.todo.complete}
              checked={this.props.todo.complete}
              disabled
            />
          </p>
          <Button
            type="primary"
            onClick={this.handleUpdate}
            className={styles.button}
          >
            Update
          </Button>
          <Button
            type="primary"
            danger
            onClick={this.deleteTodo}
            className={styles.button}
          >
            Delete
          </Button>
          <Modal
            title="Warning"
            visible={this.state.modalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p className="styles.dangerDeleteTodo">
              In order to delete a todo, it must be complete
            </p>
          </Modal>
          <TodoUpdateModal
            visible={this.state.updateModalVisible}
            todo={this.props.todo}
            onCancel={this.handleCancel}
            reload={this.props.reload}
          />
        </Card>
      </Cel>
    );
  }
}

export default TodoItem;
