// import * as React from 'react';
// import { DatePicker, Form, Input, Radio, Select } from 'antd';
// import { FormComponentProps, FormItemProps } from 'antd/es/form';
// import Moment from 'moment';
// import SFevent from '@/utils/SFevent';

// const FormItem = Form.Item;
// const Option = Select.Option;
// const RadioGroup = Radio.Group;
// const TextArea = Input.TextArea;

// interface IOperateFormProps extends FormComponentProps {
//   type?: 'detail' | 'edit' | 'create';
//   rowData?: any;
//   getForm?: Function;
// }

// const OperateForm: React.FunctionComponent<IOperateFormProps> = props => {
//   let {
//     getFieldDecorator,
//     resetFields,
//     validateFields,
//     getFieldsValue,
//   } = props.form;

//   let type = props.type || 'detail';
//   let rowData = props.rowData;

//   const formLayout: FormItemProps = {
//     labelCol: {
//       sm: 24,
//       md: 4,
//     },
//     wrapperCol: {
//       sm: 24,
//       md: 18,
//     },
//   };

//   React.useEffect(() => {
//     if (props.getForm) {
//       props.getForm(props.form);
//     }
//   }, []);

//   return (
//     <div className="OperateForm">
//       <Form>
//         <FormItem {...formLayout} label="姓名">
//           {type == 'detail'
//             ? rowData.username
//             : getFieldDecorator('user_name', {
//                 initialValue: type == 'edit' ? rowData.username : '',
//               })(<Input placeholder={'请输入员工姓名'} />)}
//         </FormItem>
//         <FormItem {...formLayout} label="性别">
//           {type == 'detail'
//             ? rowData.sex == 1
//               ? '男'
//               : '女'
//             : getFieldDecorator('sex', {
//                 initialValue: type == 'edit' ? rowData.sex : '',
//               })(
//                 <RadioGroup>
//                   <Radio value={1}>男</Radio>
//                   <Radio value={2}>女</Radio>
//                 </RadioGroup>,
//               )}
//         </FormItem>
//         <FormItem {...formLayout} label="状态">
//           {type == 'detail'
//             ? {
//                 '1': '资深工程师',
//                 '2': '高级工程师',
//                 '3': '中级工程师',
//                 '4': '产品经理',
//                 '5': 'UI',
//               }[rowData.state]
//             : getFieldDecorator('user_state', {
//                 initialValue: type == 'edit' ? rowData.state : '',
//               })(
//                 <Select placeholder={'请选择身份状态'}>
//                   <Option value={1}>咸鱼一条</Option>
//                   <Option value={2}>风华浪子</Option>
//                   <Option value={3}>百度FE</Option>
//                   <Option value={4}>创业者</Option>
//                   <Option value={4}>北大才子</Option>
//                 </Select>,
//               )}
//         </FormItem>
//         <FormItem {...formLayout} label="生日">
//           {type == 'detail'
//             ? rowData.birthday
//             : getFieldDecorator('user_birthday', {
//                 initialValue:
//                   type == 'edit'
//                     ? Moment(rowData.birthday)
//                     : Moment(+new Date()),
//               })(<DatePicker />)}
//         </FormItem>
//         <FormItem {...formLayout} label="联系地址">
//           {type == 'detail'
//             ? rowData.address
//             : getFieldDecorator('user_addresss', {
//                 initialValue: type == 'edit' ? rowData.address : '',
//                 rules: [
//                   {
//                     required: true,
//                     message: '联系地址不能为空',
//                   },
//                 ],
//               })(<TextArea />)}
//         </FormItem>
//       </Form>
//     </div>
//   );
// };
// //Hoc 高阶组件  Hight Order Components
// export default Form.create<IOperateFormProps>()(OperateForm);

import   React,{useState} from 'react';
import { DatePicker, Form, Input, Radio, Select,Card,Button,Modal, message } from 'antd';
import "./../style.less"
import { PlusOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import moment from "moment"
const Item = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const TextArea = Input.TextArea;
interface IOperateFormProps {
    record:string
}

const OperateForm: React.FunctionComponent<IOperateFormProps> = (props) => {
    let record = props.record?props.record:""
    const [state, setState] = useState({title:"",isvisible:false});
    const [record1, setRecord1] = useState();
    const [form] = Form.useForm()
    const dateFormat = 'YYYY/MM/DD';
    const handleClick = (type:string) => {
       if(type==="create"){
        setState({
            title:"创建员工",
            isvisible:true,
        });
       }else if(type==="edit"){
          let sex = record?record.sex:""
          console.log(sex);
           if(!record){
               message.info("请选择一条数据")
               return
           }
           setRecord1(record)
                setState({
                    title:"编辑员工",
                    isvisible:true,
                });
       }
    }
  
  return <div>
        <Card>
            <Button icon={<PlusOutlined />} type="primary" onClick={()=>handleClick("create")} className="buttons">创建员工</Button>
            <Button icon={<EditOutlined />} type="primary" onClick={()=>handleClick("edit")} className="buttons">编辑员工</Button>
            <Button type="primary" className="buttons">员工详情</Button>
            <Button icon={<DeleteOutlined />} type="primary" className="buttons">删除员工</Button>
            <Modal
                visible={state.isvisible}
                title={state.title}
                width={600}
                cancelText="取消"
                okText="确定"
                destroyOnClose
                onOk={()=>{
                    message.success("添加成功")
                    setState({title:"",isvisible:false});
                }}
                onCancel={()=>{
                    setState({title:"",isvisible:false});
                }}
            >
              <Form style={{width:400,marginLeft:'50px'}}
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 19 }}
                    form={form}
                    preserve={false}
              >
                  <Item label="用户名" name="username"  >
                       <Input placeholder="请输入用户名" defaultValue={record1?record1.username:""}/>
                  </Item>
                  <Item label="性别" name="sex"  >
                        <RadioGroup defaultValue={record1?record1.sex:""}>
                            <Radio value={1} >男</Radio>
                            <Radio value={2} >女</Radio>
                        </RadioGroup>
                  </Item>
                  <Item label="状态" name="status" >
                        <Select   mode="multiple" defaultValue={['1', '2']}>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                        </Select>
                  </Item>
                  <Item label="生日" name="birthday" >
                      <DatePicker defaultValue={moment('2015/01/01', dateFormat)}  />
                  </Item>
                  <Item label="联系地址" name="address" >
                      <TextArea placeholder="请输入联系地址" />
                  </Item>
              </Form>
            </Modal>
        </Card>
  </div>;
};

export default OperateForm;

