import React from 'react';
import { Table, Drawer, Form, Input, Button, Space, message, Popconfirm } from  'antd'
import axios from 'axios';

let updateItem = {}

function View() {
  const [form] = Form.useForm();
  var [isLoading, load] = React.useState(true)
  const [list, updateData] = React.useState([]);
  const [firstLoad, setLoad] = React.useState(true);
  const [selectedRowKeys, select] = React.useState([]);
  const [visible, setVisible] = React.useState(false);
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'gender',
      dataIndex: 'gender',
      key: 'gender'
    },
    {
      title: 'hp',
      dataIndex: 'hp',
      key: 'hp'
    },
    {
      title: 'damage',
      dataIndex: 'damage',
      key: 'damage'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type='link' onClick={() => showDrawer(record.id)}>修改</Button>
        </Space>
      ),
    }
  ]

  const onSelectChange = item => {
    select(item)
  }

  const showDrawer = async (item) => {
    form.resetFields()
    if (typeof item === 'number') 
      updateItem = list.find(element => element.id === item)
    else 
      updateItem = {}
    form.setFieldsValue(updateItem)
    setVisible(true)
  }

  const getCategory = async () => {
    load(true)
    let response = await axios.get("http://127.0.0.1:8080/hero/findAll")
    console.log(response.data)
    updateData(response.data)
    load(false)
  }

  const onFinish = async (values) => {
    let response, formdata = new FormData();
    Object.keys(values).forEach(key => {
        formdata.append(key, values[key])
    });
    if (values.id) 
      response = await axios.post('http://127.0.0.1:8080/hero/updateById/', formdata)
    else
      response = await axios.post('http://127.0.0.1:8080/hero/addCate/', formdata)
    if(response.status === 200)
      message.success('数据操作成功！')
    getCategory()
    setVisible(false)
  }

  const onFinishFailed = (errorInfo) => {
    errorInfo.errorFields.forEach(element => {
      console.error(element.errors[0])
    });
  }

  const deleteItem = async() => {
    let responses = []
    if (selectedRowKeys.length > 0) {
      await selectedRowKeys.forEach(async element => {
        let response = await axios.delete('http://127.0.0.1:8080/hero/deleteById/' + element)
        responses.push(response)
      })
      if (responses.every(response => response.status === 200))
        message.success('删除数据成功！')
      else{ 
        let errors = responses.filter(response => response.status !== 200);
        message.error('删除数据出问题了！请在控制台查看问题。')
        errors.forEach(error => console.error(error))
      }
      getCategory()
    } else {
      message.info('未选中数据！')
    }
  }

  if (firstLoad) {
    getCategory();
    setLoad(false);
  }
  
  if (list.length > 0) isLoading = false;
  
  return (
    <div style={{ width: '70%' }}>
      <Table 
        columns={ columns }
        rowKey={ record => record.id }
        dataSource={list}
        loading={ isLoading }
        pagination={{ hideOnSinglePage:true }}
        style={{ width:'100%' }}
        rowSelection = {{
          selectedRowKeys,
          onChange: onSelectChange,
          selections:[]
        }}
      />
      <div className='controll'>
        <Button type='primary' onClick={showDrawer}>添加</Button>
        <Popconfirm 
          placement="top"
          title={"确定要删除这些数据吗？"}
          onConfirm={deleteItem}
          okText="是"
          cancelText="否"
        >
          <Button type='primary' danger>删除</Button>
        </Popconfirm>
      </div>
      <Drawer title="数据操作面板" placement="right" onClose={() => setVisible(false)} visible={visible}>
        <Form
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={ onFinish }
          onFinishFailed={ onFinishFailed }
          autoComplete="off"
        >
          {updateItem.id? 
            <Form.Item 
              label="id"
              name='id'
            >
              <Input bordered={false} disabled/>
            </Form.Item> : null
          }
          <Form.Item
            label="name"
            name="name"
            rules={[{ required: true, message: "Please input the hero's name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="gender"
            name="gender"
            rules={[{ required: true, message: "Please input the hero's gender!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="hp"
            name="hp"
            rules={[{ required: true, message: "Please input the hero's hp!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="damage"
            name="damage"
            rules={[{ required: true, message: "Please input the hero's damage!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
    
  );
  
}

export default View;

