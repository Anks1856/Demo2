import React from "react";
import { useAddUserMutation } from "generated/graphql";
import { useHistory } from "react-router";
import {
  Button,
  Checkbox,
  Form,
  FormInstance,
  Input,
  notification,
} from "antd";

export const AddUser = () => {
  const history = useHistory();
  const [createUser, { loading }] = useAddUserMutation({});
  const formRef = React.createRef<FormInstance>();

  const notify = (
    type: "success" | "error",
    message: string,
    description: string
  ) => {
    notification[type]({
      message,
      description,
    });
  };

  const submit = (values: any) =>
    createUser({
      variables: {
        input: {
          ...values,
          isVet: !!values.isVet,
          isActive: !!values.isActive,
        },
      },
    })
      .then(() =>
        notify("success", "User Saved Successfully", "The user was saved.")
      )
      .catch(() =>
        notify(
          "error",
          "Error Saving User",
          "There was an error saving the user."
        )
      );

  const reset = () => formRef.current?.resetFields();

  return (
    <>
      <Button type="primary" onClick={() => history.push("/")}>
        Back to All Users
      </Button>
      <div className="my-6 p-6 border border-solid">
        <Form ref={formRef} name="control-ref" onFinish={submit}>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}>
            <Input type="password" />
          </Form.Item>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="title" label="Title">
            <Input />
          </Form.Item>
          <Form.Item name="isVet" valuePropName="checked">
            <Checkbox>Is Vet?</Checkbox>
          </Form.Item>
          <Form.Item name="isActive" valuePropName="checked">
            <Checkbox>Is Active?</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              className="mr-2"
              type="primary"
              htmlType="submit"
              disabled={loading}>
              Submit
            </Button>
            <Button htmlType="button" onClick={reset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
