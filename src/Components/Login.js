import React from 'react';
import { Card, Form, Input, Button, message, Space} from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login() {

    const [form] = Form.useForm()
    const navigate = useNavigate()
    const str = '0123456789abcdefghijklmnopqrstuvwxyz'
    const colors = ['blue', 'yellow', 'green', 'red', 'orange', 'purple', 'black', 'gray']
    const [firstLoad, setLoad] = React.useState(true)
    const [check_code, updateData] = React.useState([])
    const [code_value, setValue] = React.useState('')
    const style = {
        check_code: {
            height: '32px',
            width: '25%',
            display: 'inline-flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginLeft: '5%',
            padding: '0 3%',
            fontWeight: '700',
            backgroundColor: '#0FF',
            cursor: 'pointer'
        }
    }

    const onFinish = (values) => {
        let flag = values.check_code === code_value
        let formdata = new FormData()
        formdata.append('user_name', values.username);
        formdata.append('user_password', values.password)
        axios.post('http://127.0.0.1:8080/hero/login', formdata).then( ({ data }) => {
            if (data && flag) {
                navigate('/view')
            } else {
                if (!data){
                    message.error('用户名或密码错误！')
                    form.resetFields()
                } else {
                    message.error('验证码错误！')
                    form.resetFields(['check_code'])
                    initCode()
                }
            }
        })
    }
    
    const onFinishFailed = () => {
        message.error('表单校验失败')
    }

    const initCode = () => {
        let codes = []
        let value = ''
        for ( let i = 0; i < 4; i++ ) {
            let code_item = {}
            let num = Math.floor(Math.random() * str.length)
            code_item.code = str[num]
            value += str[num]
            num = Math.floor(Math.random() * colors.length);
            code_item.color = colors[num]
            codes.push(code_item)
        }
        updateData(codes)
        setValue(value)
    }

    if (firstLoad) {
        initCode();
        setLoad(false);
    }
    
  
    return (
      <div>
          <Card title="用户登录" bordered={false} style={{ width: 500 }}>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label='验证码'
                    >
                        <Form.Item
                            name="check_code"
                            rules={[{ required: true, message: '请输入验证码!' }]}
                            style={{ display: 'inline-block', width: '70%', marginBottom: '0' }}
                        >
                            <Input/>
                        </Form.Item>
                        <Space style={ style.check_code } onClick={() => initCode()}>
                            {
                                check_code.map((item, index) => {
                                    return (
                                        <span style={{ color: item.color }} key={ index }>{ item.code }</span>
                                    )
                                })
                            }
                        </Space>
                    </Form.Item>

                    <Link to="/register" style={{ position: "absolute", right: "100px", zIndex: '999' }}>注册</Link>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
          </Card>
      </div>
    );
}
  

export default Login