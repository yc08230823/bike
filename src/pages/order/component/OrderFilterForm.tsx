// import * as React from 'react';
// import { Button, Form, Select, DatePicker } from 'antd';
// import { FormComponentProps } from 'antd/es/form';
// import moment from 'moment';
// import SFevent from '@/utils/SFevent';
// const Option = Select.Option;
// const FormItem = Form.Item;

// interface IOrderFilterFormProps extends FormComponentProps {}

// const OrderFilterForm: React.FunctionComponent<IOrderFilterFormProps> = props => {
//   const { getFieldDecorator, resetFields, getFieldsValue } = props.form;

//   const handleSearch = () => {
//     SFevent.ee_emit('Order_search', getFieldsValue());
//   };

//   return (
//     <div className="OrderFilterForm">
//       <Form layout="inline">
//         <FormItem label="订单城市">
//           {getFieldDecorator('order_city', {
//             initialValue: 1,
//           })(
//             <Select>
//               <Option value={1}>全部</Option>
//               <Option value={2}>北京</Option>
//               <Option value={3}>杭州</Option>
//             </Select>,
//           )}
//         </FormItem>
//         <FormItem label="订单时间">
//           {getFieldDecorator('start_time', {
//             initialValue: moment(+new Date()),
//           })(<DatePicker />)}
//         </FormItem>
//         <FormItem label="~" colon={false}>
//           {getFieldDecorator('end_time', {
//             initialValue: moment(+new Date()),
//           })(<DatePicker />)}
//         </FormItem>
//         <FormItem label="订单城市">
//           {getFieldDecorator('status', {
//             initialValue: 0,
//           })(
//             <Select style={{ width: 120 }}>
//               <Option value={0}>全部</Option>
//               <Option value={1}>已完成</Option>
//               <Option value={2}>未完成</Option>
//             </Select>,
//           )}
//         </FormItem>
//         <FormItem>
//           <Button
//             type="primary"
//             onClick={handleSearch}
//             style={{ marginRight: 10 }}
//           >
//             查询
//           </Button>
//           <Button
//             type="primary"
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

// export default Form.create()(OrderFilterForm);

import * as React from 'react';
import { Card,Form,Select,DatePicker,Button } from "antd"
const { Item } = Form
const { Option } = Select
const { RangePicker } = DatePicker;
interface IOrderFilterFormProps {
}

const onFinish = (values:any) => {
    console.log("values",values);
}
const OrderFilterForm: React.FunctionComponent<IOrderFilterFormProps> = (props) => {
  return <div>
         <Card>
             <Form layout="inline" onFinish={onFinish} >
                <Item name="city" label="城市" style={{width:120}} >
                    <Select defaultValue="all">
                        <Option value="all">全部</Option>
                        <Option value="bj">北京</Option>
                        <Option value="sj">天津</Option>
                        <Option value="sh">上海</Option>
                    </Select>
                </Item>
                <Item name="time" label="订单时间"  >
                    <RangePicker/>
                </Item>
                <Item name="select" label="订单状态"  style={{width:180}} >
                   <Select defaultValue="all">
                        <Option value="all">全部</Option>
                        <Option value="jxz">进行中</Option>
                        <Option value="js">结束</Option>
                    </Select>
                </Item>
                <Item>
                        <Button type="primary" htmlType="submit" >查询</Button>
                </Item>
                <Item>
                        <Button>重置</Button>
                </Item>
             </Form>
         </Card>
  </div>;
};

export default OrderFilterForm;