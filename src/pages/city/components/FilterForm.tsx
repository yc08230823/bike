// import * as React from 'react';
// import { Select, Form, Button, message } from 'antd';
// import { FormComponentProps } from 'antd/es/form';
// import SFevent from '@/utils/SFevent';

// const Option = Select.Option;
// const FormItem = Form.Item;

// interface IFilterPageProps extends FormComponentProps {
//   a1?: number;
// }

// const FilterPage: React.FunctionComponent<IFilterPageProps> = props => {
//   //      对表单进行双向数据绑定    获取表单数据   验证表单数据   重置表单数据
//   const {
//     getFieldDecorator,
//     getFieldsValue,
//     validateFields,
//     resetFields,
//   } = props.form;

//   // 用于筛选表单的请求
//   const handleFilterSubmit = async () => {
//     try {
//       await validateFields();
//       let data = getFieldsValue();
//       // 子组件触发父组件提交事件的逻辑
//       SFevent.ee_emit('filterRequest', data);
//     } catch (e) {
//       message.info('表单有问题，请重试一下');
//     }
//   };

//   return (
//     <div className="FilterPage">
//       <Form layout="inline">
//         <FormItem label="城市选择">
//           {getFieldDecorator('open_city', {
//             rules: [
//               {
//                 required: true,
//                 message: '必须选择城市',
//               },
//             ],
//           })(
//             <Select placeholder="请选择城市" style={{ width: 120 }}>
//               <Option value="1">北京</Option>
//               <Option value="2">石家庄</Option>
//               <Option value="3">长春</Option>
//             </Select>,
//           )}
//         </FormItem>
//         <FormItem label="停车模式">
//           {getFieldDecorator('parking_mode', {
//             rules: [
//               {
//                 required: true,
//                 message: '必须选择停车模式',
//               },
//             ],
//           })(
//             <Select style={{ width: 120 }} placeholder="请选择停车模式">
//               <Option value="1">全部</Option>
//               <Option value="2">禁停区模式</Option>
//               <Option value="3">指定地点停车模式</Option>
//             </Select>,
//           )}
//         </FormItem>
//         <FormItem label="加盟商授权状态">
//           {getFieldDecorator('op_mode', {
//             rules: [
//               {
//                 required: true,
//                 message: '必须选择授权状态',
//               },
//             ],
//           })(
//             <Select style={{ width: 120 }} placeholder="请选择授权状态">
//               <Option value="1">全部</Option>
//               <Option value="2">已授权</Option>
//               <Option value="3">未授权</Option>
//             </Select>,
//           )}
//         </FormItem>
//         <FormItem>
//           <Button
//             type="primary"
//             onClick={() => {
//               handleFilterSubmit();
//             }}
//             style={{ marginRight: 10 }}
//           >
//             查询
//           </Button>
//           <Button
//             onClick={() => {
//               resetFields();
//             }}
//           >
//             重置
//           </Button>
//         </FormItem>
//       </Form>
//     </div>
//   );
// };

// export default Form.create()(FilterPage);

import * as React from 'react';
import { Card,Form,Select,Button } from "antd"
const { Item } = Form
const { Option } = Select
interface IFilterFormProps {
}

const FilterForm: React.FunctionComponent<IFilterFormProps> = (props) => {
    const onFinish = (values:object) => {
       console.log("values",values);
    }
  return <div>
       <Card>
          <Form layout="inline" style={{width:1300}} onFinish={onFinish}>
              <Item label="城市" name="city" >
                <Select defaultValue="all" style={{ width: 120 }} >
                    <Option value="all">全部</Option>
                    <Option value="bj">北京市</Option>
                    <Option value="tj">天津市</Option>
                    <Option value="sh">上海市</Option>
                </Select>
              </Item>
              <Item label="用车模式" name="ycmh">
                <Select defaultValue="all" style={{ width: 120 }}  >
                    <Option value="all">全部</Option>
                    <Option value="zd">指定停车模式</Option>
                    <Option value="jt">禁停区</Option>
                </Select>
              </Item>
              <Item label="运营模式"name="yy" >
                <Select defaultValue="zy" style={{ width: 120 }}  >
                    <Option value="all">全部</Option>
                    <Option value="zy">自营</Option>
                    <Option value="jm">加盟</Option>
                </Select>
              </Item>
              <Item label="加盟商授权状态" name="zt">
                <Select defaultValue="wsq" style={{ width: 120 }}  >
                    <Option value="all">全部</Option>
                    <Option value="wsq">未授权</Option>
                    <Option value="ysq">已授权</Option>
                </Select>
              </Item>
              <Item>
                 <Button type="primary" htmlType="submit">查询</Button>
                 <Button style={{marginLeft:30}} >重置</Button>
              </Item>
          </Form>
       </Card>
  </div>;
};

export default FilterForm;
