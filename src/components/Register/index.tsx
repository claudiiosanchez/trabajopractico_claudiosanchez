import React from 'react';
import { Form, Button, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './styles.less';

interface IRegisterFormProps {
  onFormSubmit: (auth: ICreateUser) => void;
}

interface ICreateUser {
  email: string;
  password: string;
}

export const RegisterForm: React.FC<IRegisterFormProps> = ({ onFormSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
     onFormSubmit({
        email: form.getFieldValue('email'),
        password: form.getFieldValue('password')+" "+form.getFieldValue('passwordrepeated')
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
      <Form.Item
        name="passwordrepeated"
        rules={[{ required: true, message: 'Please repeat your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
