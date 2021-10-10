import * as React from 'react';
import { Card,Input,Form,DatePicker,Button } from "antd"
const { Item } = Form
interface IUserFilterFormProps {
}
const onFinish = (values:any) => {
    console.log("values",values);
}  
const UserFilterForm: React.FunctionComponent<IUserFilterFormProps> = (props) => {
  return <div>
        <Form layout="inline" onFinish={onFinish} >
            <Item label="用户名" name="userName">
                <Input placeholder="请输入用户名称" />
            </Item>
            <Item label="手机号" name="phone">
                <Input placeholder="请输入手机号" />
            </Item>
            <Item label="请选择入职日期" name="time">
                <DatePicker placeholder="请选择时间"/>
            </Item>
            <Item >
               <Button type="primary" htmlType="submit" >查询</Button>
               <Button>重置</Button>
            </Item>
        </Form>
  </div>;
};

export default UserFilterForm;
