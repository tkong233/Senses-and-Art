import React from 'react';
import { Form, Input, Button, Checkbox,InputNumber } from 'antd';
import LocationSearchInput from './LocationSearchInput';
class JournalForm extends React.Component {
    render() {
        const layout = {
          labelCol: { span: 8 },
          wrapperCol: { span: 16 },
        };
        const tailLayout = {
          wrapperCol: {
            offset: 3,
            span: 16,
          },
        }
        const onFinish = (values) => {
            console.log('Success:', values);
          };
        
        const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        };
        const validateMessages = {
          required: '${label} is required!',
          types: {
            email: '${label} is not validate email!',
            number: '${label} is not a validate number!',
          },
          number: {
            range: '${label} must be between ${min} and ${max}',
          },
        }
        return (
            <div>
              <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label="First Name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                  <Checkbox>Anonymous</Checkbox>
                </Form.Item>

                <Form.Item name={['user', 'email']} label="Location" rules={[{ type: 'Location',required: true }]}>
                  <Input />
                </Form.Item>

                <Form.Item name={['user', 'introduction']} label="How you feel">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              <LocationSearchInput></LocationSearchInput>
            </div>
        );
    }
}

export default JournalForm;