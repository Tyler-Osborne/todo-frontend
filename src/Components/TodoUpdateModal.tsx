import React from "react";
import Todo from "../Models/Todo";
import { Modal, Form, Switch, Input, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

interface TodoUpdateModalProps {
  visible: boolean;
  onCancel: () => void;
  todo: Todo;
}

const TodoUpdateModal: React.FC<TodoUpdateModalProps> = ({
  visible,
  todo,
  onCancel,
}) => {
  const [form] = Form.useForm();

  const onUpdate = (values: any) => {
    values.id = todo.id;
    console.log(values);
  };

  return (
    <Modal
      visible={visible}
      title="Update Todo"
      onCancel={onCancel}
      footer={null}
    >
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        initialValues={todo}
        onFinish={onUpdate}
      >
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="complete" label="Complete" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TodoUpdateModal;
