import React, { useState } from "react";
import { Button, Form, Input } from "antd";

import { User } from "../model/user.model";
import { useAppDispatch } from "../state/hook";
import { updateUser } from "../state/reducers/users.reducer";

interface Props extends User {}

function SingleEditUserModal(props: Props) {
  const {} = props as User;

  const [currentUser, setCurrentUser] = useState<User>({} as User);
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const dispatch= useAppDispatch();

  const onReset = () => {
    form.resetFields();
  };

  const _updateUser = (userToUpdate: User) => {
    setIsLoading(true);
    ()=>dispatch(updateUser(userToUpdate));
    setIsLoading(false);
    onReset();
  }

  const onFinish = (values: any) => {
    setIsLoading(true);
    const userToUpdate = currentUser;
    userToUpdate.name = values.name;
    _updateUser(userToUpdate);
  };

  return (
    <>
      <Form onFinish={onFinish} form={form}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input placeholder="Enter new name..."  />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default SingleEditUserModal;
