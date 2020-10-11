import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import LocationSearchInput from './LocationSearchInput';
class JournalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'location':'','firstname':'','journal':''};
  }
    handleLocation = address => {
      
      this.setState({'location':address})
    }
    render() {
        const {song_id,image_id} = this.props;
        const layout = {
          labelCol: { span: 4 },
          wrapperCol: { span: 20 },
        };
        const tailLayout = {
          wrapperCol: {
            span: 11,
            
          },
        }
        const onFinish = (values) => {
            
          console.log([{
            'song_id':song_id,
            'image_id':image_id,
            'location':this.state.location,
            'journal':values.user.journal,
            'user_name': values.user.anonymous ? 'anonymous': values.user.name,
            'is_public': true
          }])
          // console.log('Success:', this.state,values);
        };
        
        // const onFinishFailed = (errorInfo) => {
        //   console.log('Failed:', errorInfo);
        // };
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
                <Form.Item {...tailLayout} name={['user', 'anonymous']} valuePropName="checked">
                  <Checkbox>Anonymous</Checkbox>
                </Form.Item>

                <Form.Item label="Location" >
                  <LocationSearchInput handleLocation={ this.handleLocation }></LocationSearchInput>
                </Form.Item>

                <Form.Item name={['user', 'journal']} label="How you feel">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ span:10, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              
            </div>
        );
    }
}

export default JournalForm;