import React from 'react';
import { Form, Button, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { ISignin } from '../../store/auth/models/auth.model';
import './styles.less';
import { Link } from 'react-router-dom';

interface ISignInFormProps {
  onFormSubmit: (auth: ISignin) => void;
}

export const SignInForm: React.FC<ISignInFormProps> = ({ onFormSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    onFormSubmit({
      email: form.getFieldValue('email'),
      password: form.getFieldValue('password'),
      authenticated: true
    });

    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
  );
};
