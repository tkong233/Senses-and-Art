import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
class SharePage extends React.Component {
    render() {
        const layout = {
            labelCol: {
              span: 6,
            },
            wrapperCol: {
              span: 16,
            },
          };

        const tailLayout = {
            wrapperCol: {
            offset: 6,
            span: 16,
            },
        };

        const onFinish = (values) => {
            console.log('Success:', values);
          };
        
        const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        };
          
        return (
            <div>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        anonymous: false,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        label="First Name"
                        name="first_name"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your first name or select Anonymous!',
                        },
                        ]}>
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="anynoumous" valuePropName="checked">
                        <Checkbox>Anonymous</Checkbox>
                    </Form.Item>

                    <Form.Item
                        label="Location"
                        name="location"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your location!',
                        },
                        ]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="How was your experience?"
                        name="journal"
                        rules={[
                        {
                            required: true,
                            message: 'Please write a few words about your feeling!',
                        },
                        ]}>
                        <Input.TextArea/>
                    </Form.Item>


                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default SharePage;