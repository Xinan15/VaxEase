import React from 'react';
import { Card, Form, Input, Button, message, Modal } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Register() {
    
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const [password, setPassword] = React.useState('')
    const [isModalVisible, setIsModalVisible] = React.useState(false)

    const onFinish = (values) => {
        let formdata = new FormData()
        formdata.append('user_name', values.username)
        formdata.append('user_password', values.password)
        axios.post('http://127.0.0.1:8080/hero/register', formdata).then( ({ data }) => {
            if (data === 'ok')
                setIsModalVisible(true)
            if (data === 'registered')
                message.error('用户名已被注册！')
        })
    }
    
    const onFinishFailed = (errorInfo) => {
        alert('Failed:', errorInfo)
    }

    const handleOk = () => {
        form.resetFields()
        navigate('/')
    };

    const handleCancel = () => {
        form.resetFields()
        setIsModalVisible(false)
    }

    const getPassword = () => {
        setPassword(document.getElementById('password').value)
    }

    const checkPassword = (rule,value) => {
        if (value !== password) {
            return Promise.reject('两次输入的密码不一致！')
          } else {
            return Promise.resolve()
          }
    }
  
    return (
      <div>
            <Card title="用户注册" bordered={false} style={{ width: 500 }}>
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
                    <Input.Password id='password' onBlur={getPassword}/>
                </Form.Item>


                <Form.Item
                    label="确认密码"
                    name="re_password"
                    rules={[
                      { required: true, message: '请输入密码!', validateTrigger: 'burl' },
                      { validator: checkPassword }
                  ]}
                >
                    <Input.Password />
                </Form.Item>

                <Link to="/" style={{ position: "absolute", right: "100px", zIndex: '999' }}>返回登录</Link>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
                </Form>
            </Card>
            <Modal title="信息提示" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                注册成功！快去登录吧！
            </Modal>
      </div>
    );
}
  

export default Register