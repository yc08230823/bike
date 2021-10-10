import * as React from 'react';
import { Card, Form, Input,Radio,InputNumber,Select,Switch,DatePicker,Button  } from "antd"
import moment from "moment"
const { Item } = Form
const { Option } = Select
const { TextArea } = Input
interface IRegPageProps {
}

const RegPage: React.FunctionComponent<IRegPageProps> = (props) => {
    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const dateFormat = 'YYYY/MM/DD';
      const onFinish = () => {
          let values = form.getFieldsValue(true)
          console.log("values",values);
      }
      const [form] = Form.useForm()
  return <div className="regpage">
           <Card title="注册表单" >
               <Form layout="horizontal"
                     style={{width:600}} 
                     labelCol={{ span: 10 }}
                     wrapperCol={{ span: 20 }}
                     onFinish={onFinish}
                     form={form}
                >
                    <Item name="userName" rules={ [{ required: true, message: '请输入用户名' }]}
                     label="用户名">
                            <Input placeholder="请输入用户名" />
                    </Item>
                    <Item name="pwd" 
                         label="密码">
                            <Input placeholder="请输入密码" />
                    </Item>
                    <Item name="sex" 
                         label="性别">
                        <Radio.Group>
                             <Radio value="0">男</Radio>     
                             <Radio value="1">女</Radio>     
                        </Radio.Group>
                    </Item>
                    <Item name="age" 
                         label="年龄">
                         <InputNumber defaultValue={18}/>
                    </Item>
                    <Item name="zt" 
                         label="当前状态">
                        <Select defaultValue="1"> 
                           <Option key="1" value="1">1</Option>
                           <Option key="2" value="2">2</Option>
                           <Option key="3" value="3">3</Option>
                           <Option key="4" value="4">4</Option>
                           <Option key="5" value="5">5</Option>
                        </Select>
                    </Item>
                    <Item name="ah" 
                         label="爱好">
                        <Select  mode="multiple"   defaultValue={['1', '2']} > 
                           <Option key="1" value="1">1</Option>
                           <Option key="2" value="2">2</Option>
                           <Option key="3" value="3">3</Option>
                           <Option key="4" value="4">4</Option>
                           <Option key="5" value="5">5</Option>
                        </Select>
                    </Item>
                    <Item name="sfzh" 
                         label="是否已婚">
                        <Switch/>
                    </Item>
                    <Item name="sr" 
                         label="生日">
                       <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                    </Item>
                    <Item name="address" 
                         label="联系地址">
                        <TextArea rows={4} placeholder="北京市海淀区奥林匹克公园"/>
                    </Item>
                    <Item name="time" 
                         label="早起时间">
                      <DatePicker  />  
                    </Item>
                    <Item style={{marginLeft:"50%"}}>
                       <Button type="primary" htmlType="submit" >提交</Button>
                    </Item>
                   
               </Form>
           </Card>
  </div>;
};

export default RegPage;
