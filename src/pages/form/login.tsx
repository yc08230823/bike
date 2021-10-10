import * as React from 'react';
import { Form,Card,Input,Button,Checkbox } from "antd"
import { UserOutlined, LockOutlined } from '@ant-design/icons';
let { Item } = Form
interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
    const onFinish = (values:any) => {
        console.log("values",values);
    }
    const [form] = Form.useForm();
  return <div className="login">
       <Card title="行内表单" >
            <Form layout="inline"  onFinish={onFinish}>
                 <Item name="userName" >
                    <Input placeholder="请输入用户名"  />
                 </Item>
                 <Item >
                    <Input placeholder="请输入密码" />
                 </Item>
                 <Item >
                    <Button type="primary" htmlType="submit">登录</Button>
                 </Item>
            </Form>
       </Card>
       <Card title="登录水平表单" >
         <Form layout="horizontal" style={{width:300}}   onFinish={onFinish} >
            <Item name="userName"  >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />}   placeholder="请输入用户名"  />
            </Item>
            <Item name="pwd">
                 <Input  prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
            </Item>
            <Item name="select" style={{display:'inline-block'}} valuePropName="checked" >
                <Checkbox >记住密码</Checkbox>
            </Item>
            <a href="#" style={{display:'inline-block',float:'right'}}>忘记密码</a>
            <Item >
                    <Button type="primary" htmlType="submit">登录</Button>
            </Item>
         </Form>
       </Card>
  </div>;
};

export default Login;

 
