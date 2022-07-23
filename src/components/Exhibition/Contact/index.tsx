import {Button, Form, Input, InputNumber} from 'antd';
import * as S from './Contact.styled';
type Props = {};

const ContactUs = (props: Props) => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <S.Contact>
      <div className="header">
        <div className="title">
          <h1>Contact Us Now!</h1>
        </div>
        <p>
          Please fill out your information and well reach out to you shortly.
        </p>
      </div>
      <Form
        name="nest-messages"
        onFinish={onFinish}
        labelCol={{span: 8}}
        wrapperCol={{span: 8}}>
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[{type: 'email'}]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'age']}
          label="Age"
          rules={[{type: 'number', min: 0, max: 99}]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name={['user', 'website']} label="Website">
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8, span: 8}}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </S.Contact>
  );
};

export default ContactUs;
