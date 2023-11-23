import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const onFinish = (values: unknown) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      initialValues={{ remember: true }}
      size='large'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 2, span: 22 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 2, span: 20 }}>
        <Button type="primary" htmlType="submit" style={{width: '100%'}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;