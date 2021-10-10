// import * as React from 'react';
// import { Form, Select } from 'antd';
// import { FormComponentProps } from 'antd/es/form';
// import SFevent from '@/utils/SFevent';

// interface IOpenCityFormProps extends FormComponentProps {}

// const Option = Select.Option;
// const FormItem = Form.Item;

// const OpenCityForm: React.FunctionComponent<IOpenCityFormProps> = props => {
//   let { getFieldDecorator } = props.form;

//   const formItemlayout = {
//     labelCol: {
//       sm: 24,
//       md: 6,
//     },
//     wrapperCol: {
//       sm: 24,
//       md: 16,
//     },
//   };
//   React.useEffect(() => {
//     SFevent.ee_emit('get_openForm', props.form);
//   }, []);
//   return (
//     <div className="OpenCityForm">
//       <Form>
//         <FormItem {...formItemlayout} label="开通城市">
//           {getFieldDecorator('open_city', {
//             rules: [
//               {
//                 required: true,
//                 message: '请选择城市',
//               },
//             ],
//           })(
//             <Select placeholder="请选择城市">
//               <Option value="">全部</Option>
//               <Option value="bj">北京</Option>
//               <Option value="hz">杭州</Option>
//             </Select>,
//           )}
//         </FormItem>
//         <FormItem {...formItemlayout} label="运营模式">
//           {getFieldDecorator('open_mode', {
//             initialValue: 1,
//           })(
//             <Select placeholder="请选择城市">
//               <Option value={1}>自营</Option>
//               <Option value={2}>加盟</Option>
//             </Select>,
//           )}
//         </FormItem>
//         <FormItem {...formItemlayout} label="开通模式">
//           {getFieldDecorator('open_userMode', {
//             initialValue: 1,
//           })(
//             <Select placeholder="请选择城市">
//               <Option value={1}>指定区域停车</Option>
//               <Option value={2}>禁停区</Option>
//             </Select>,
//           )}
//         </FormItem>
//       </Form>
//     </div>
//   );
// };

// export default Form.create()(OpenCityForm);

import * as React from 'react';
import { Card,Form,Select } from "antd"
const { Item } = Form
const { Option } = Select
interface IOpenCityFormProps {
}

const OpenCityForm: React.FunctionComponent<IOpenCityFormProps> = (props) => {
  return <div>
       <Card title="开通城市">
           <Form layout="horizontal" form={props.form}>
                <Item label="选择城市" name="city">
                      <Select defaultValue="bj" style={{width:100}}>
                          <Option value="全部" >全部</Option>
                          <Option value="北京市" >北京市</Option>
                          <Option value="天津市" >天津市</Option>
                      </Select>
                </Item>
                <Item label="运营模式" name="model">
                      <Select defaultValue="自营" style={{width:100}} >
                          <Option value="自营" >自营</Option>
                          <Option value="加盟" >加盟</Option>
                      </Select>
                </Item>
                <Item label="运营模式" name="stop">
                      <Select defaultValue="指定停车区" style={{width:100}} >
                          <Option value="指定停车区" >指定停车区</Option>
                          <Option value="禁停区" >禁停区</Option>
                      </Select>
                </Item>
           </Form>
       </Card>
  </div>;
};

export default OpenCityForm;
