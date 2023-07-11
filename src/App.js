import './App.css';
import  { Form, Button, Checkbox, DatePicker, Input, Select} from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          autoComplete="off"
          labelCol={{span: 10}}
          wrapperCol={{span: 14}}
          onFinish={(values) => {
            console.log({values});
          }}
          >
          <Form.Item
            name='fullName'
            label='Full Name'
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: true },
              { min: 3 },
              ]}
              hasFeedback
            >
            <Input placeholder='Type your name'/>
          </Form.Item>
          <Form.Item
            autoComplete="off"
            name='email'
            label='Email'
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email",
                message: 'Please enter a valid email'
              },
              ]}
              hasFeedback
            >
            <Input placeholder='Type your email'/>
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
            rules={[
              {
                required: true,
              },
              { min: 6 },
              {validator:(_,value)=>
                value && value.includes('A')
                ? Promise.resolve()
                : Promise.reject('Password does not match criteria')
              }
              ]}
              hasFeedback
            >
            <Input.Password placeholder='Type your password'/>
          </Form.Item>
          <Form.Item
            name='confirmPassword'
            label='Confirm Password'
            dependencies={['password']}
            rules={[
              {
                required: true,
              },
              ({getFieldValue}) => ({
                validator(_,value){
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    'The two password not matched'
                    );
                }
              })
              ]}
              hasFeedback
          >
            <Input.Password placeholder='Confirm your password'/>
          </Form.Item>
          <Form.Item
            name='gender'
            label='Gender (optional)'
            requiredMark='optional'
            >
            <Select placeholder='Select your gender'>
              <Select.Option value='male'>Male</Select.Option>
              <Select.Option value='female'>Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='dob'
            label='Date of Birth'
            rules={[
              {
                required: true,
                message: "Please select your day of birth",
              },
            ]}
            >
            <DatePicker style={{width: '100%'}} picker='date' placeholder='Choose date of birth'/>
          </Form.Item>
          <Form.Item
            name='website'
            label='Website'
            rules={[
              {
                required: true,
                message: "Please enter your website url",
              },
              { type: "url",
                message: 'Please enter a valid url'
              },
              ]}
              hasFeedback
            >
            <Input placeholder='Add your website url'/>
          </Form.Item>
          <Form.Item
            name='agreement'
            wrapperCol={{span: 28}}
            valuePropName='checked'
            rules={[
              {validator:(_,value)=>
                value
                ? Promise.resolve()
                : Promise.reject('To proceed, you need to agree with our T&C')
              },
              ]}
              hasFeedback
            >
            <Checkbox>Agree to our <a href='#'>Terms and Conditions</a></Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{span: 28}}>
            <Button block type='primary' htmlType='submit'>Register</Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;
