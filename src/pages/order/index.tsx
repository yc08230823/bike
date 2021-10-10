// import * as React from 'react';
// import { Button, Table, Card, message, Modal } from 'antd';
// import { ColumnProps, TableRowSelection } from 'antd/es/table';
// import SFaxios from '@/utils/SFaxios';
// import OrderFilterForm from './component/OrderFilterForm';
// import SFevent from '@/utils/SFevent';

// interface IOrderPageProps {}

// // 用到的接口
// // /order/list      订单列表
// // /order/bike_info  订单具体信息
// // /order/detail    详情页的数据
// //  /order/finish_order 订单结束的接口
// const OrderPage: React.FunctionComponent<IOrderPageProps> = props => {
//   //define the columns of the table
//   //potoplayer
//   const [tableData, setTable] = React.useState<any[]>([]);

//   const [tableRecord, setRecord] = React.useState<any[]>([]);

//   const [rowkeys, setTablekey] = React.useState<string[] | number[]>([]);

//   const columns: Array<ColumnProps<{}>> = [
//     {
//       title: '订单编号',
//       dataIndex: 'order_sn',
//     },
//     {
//       title: '车辆编号',
//       dataIndex: 'bike_sn',
//     },
//     {
//       title: '用户名',
//       dataIndex: 'user_name',
//     },
//     {
//       title: '手机号',
//       dataIndex: 'mobile',
//     },
//     {
//       title: '里程',
//       dataIndex: 'distance',
//     },
//     {
//       title: '行驶时长',
//       dataIndex: 'total_time',
//     },
//     {
//       title: '状态',
//       dataIndex: 'status',
//       render: data => {
//         return data == 1 ? <span>已完成</span> : <span>未完成</span>;
//       },
//     },
//     {
//       title: '开始时间',
//       dataIndex: 'start_time',
//     },
//     {
//       title: '结束时间',
//       dataIndex: 'end_time',
//     },
//     {
//       title: '订单金额',
//       dataIndex: 'total_fee',
//     },
//     {
//       title: '实付金额',
//       dataIndex: 'user_pay',
//     },
//   ];

//   //请求数据
//   const requestList = async (params?: any) => {
//     try {
//       let result: any = params
//         ? await SFaxios.ajax({ url: '/order/list', data: { params } })
//         : await SFaxios.ajax({ url: '/order/list' });
//       let tableRecord: any[] = result?.result.item_list;

//       tableRecord.forEach((item, index) => {
//         item.key = index;
//       });
//       setTable(tableRecord);
//     } catch (e) {
//       message.info('出现了问题，不过不是你的问题');
//     }
//   };
//   //表格行选配置
//   const rowSelection: TableRowSelection<{}> = {
//     type: 'radio',
//     selectedRowKeys: rowkeys,
//     onChange: (selectKey, selectRow) => {
//       setTablekey(selectKey);
//       setRecord(selectRow);
//     },
//   };

//   //订单详情
//   const handleOrderDetail = () => {
//     if (rowkeys.length == 0) {
//       Modal.info({
//         title: '提示',
//         content: '请选择一条记录',
//       });
//       return false;
//     }
//     //打开弹出新窗口
//     window.open(
//       window.location.origin + '/#/detail/order/' + tableRecord[0].order_sn,
//       '_blank',
//     );
//   };

//   const handleOrderEnd = () => {
//     if (rowkeys.length == 0) {
//       Modal.info({
//         title: '提示',
//         content: '请选择一条记录',
//       });
//       return false;
//     }
//     Modal.confirm({
//       title: '确认删除',
//       content: `你确定删除记录 ${tableRecord[0].order_sn}`,
//       onOk: () => {
//         //发送请求 确认删除
//         SFaxios.ajax({
//           url: '/order/finish_order',
//           data: {
//             params: tableRecord[0].order_sn,
//           },
//         }).then(res => {
//           message.success('操作成功');
//           requestList();
//         });
//       },
//     });
//   };

//   React.useEffect(() => {
//     requestList();

//     SFevent.ee_on('Order_search', (param: any) => {
//       requestList(param);
//     });
//   }, []);

//   return (
//     <div className="OrderPage">
//       <Card>
//         {/* 存放表单 */}
//         <OrderFilterForm />
//       </Card>
//       <Card>
//         <Button
//           type="primary"
//           style={{ marginRight: 10 }}
//           onClick={handleOrderDetail}
//         >
//           订单详情
//         </Button>
//         <Button type="primary" onClick={handleOrderEnd}>
//           结束订单
//         </Button>
//       </Card>
//       {/* datasource 数据源 */}
//       {/* columns  列 */}
//       <div style={{ padding: 10, background: '#fff' }}>
//         <Table
//           columns={columns}
//           dataSource={tableData}
//           rowSelection={rowSelection}
//           onRow={(record, index) => {
//             return {
//               onClick() {
//                 setRecord([record]);
//                 setTablekey([index]);
//               },
//             };
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default OrderPage;

import   React,{useState,useEffect} from 'react';
import OrderFilterForm from "./component/OrderFilterForm"
import { Table,Card, Button,Modal,Form,message } from "antd"
import SFaxios from "./../../utils/SFaxios"
const {Item} = Form
interface IOrderPageProps {
}

const OrderPage: React.FunctionComponent<IOrderPageProps> = (props) => {
    const [dataSourse, setDataSourse] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [showmodal, setShowmodal] = useState(false);
    const [selectedRow, setSelectedRow] = useState();

    const columns = [
        {
            title:"订单标号",
            dataIndex:"order_sn"
        },
        {
            title:"车辆标号",
            dataIndex:"bike_sn"
        },
        {
            title:"用户名",
            dataIndex:"user_name"
        },
        {
            title:"手机号",
            dataIndex:"mobile"
        },
        {
            title:"里程",
            dataIndex:"distance",
            render:(distance:number)=>{
                return distance/1000 + "KM"
            }
        },
        {
            title:"行驶时长",
            dataIndex:"total_time"
        },
        {
            title:"状态",
            dataIndex:"status"
        },
        {
            title:"开始时间",
            dataIndex:"start_time"
        },
        {
            title:"结束时间",
            dataIndex:"end_time"
        },
        {
            title:"订单金额",
            dataIndex:"total_fee"
        },
        {
            title:"实付金额",
            dataIndex:"user_pay"
        }
    ]
    useEffect(() => {
        request()
    }, []);
    const  request = async () =>{
        let res:any =await SFaxios.ajax({url:"/order/list"})
        let data = res.result.item_list;
        data.forEach((item:any,index:any) => {
             item.key=index
        });
        setDataSourse(data)
    }
    const handleClick = () =>{
        if(selectedRow===undefined){
            message.error("请选择一条数据")
        }else{
            setShowmodal(true)
        }
    }
    const handleOpen = () =>{
        if(selectedRow===undefined){
            message.error("请选择一条数据")
        }else{
            window.open(window.location.origin+`/#/detail/order/${selectedRow.order_sn}`,"_blank")
        }
    }
  return <div>
        <OrderFilterForm/>
        <Card>
            <Button type="primary" onClick={handleOpen}>订单详情</Button>
            <Button style={{marginLeft:10}} type="primary" onClick={handleClick}>结束订单</Button>
            <Table
             columns={columns}
             dataSource={dataSourse}
             rowSelection={{type:"radio",selectedRowKeys:selectedRowKeys}}
             onRow={record => {
                return {
                 onClick: event => {
                     console.log("record",record);
                     setSelectedRowKeys([(record.id-1)])
                     setSelectedRow(record)
                    }, 
                  
                };
              }}
            />
             <Modal
              title="结束订单"
              visible={showmodal}
              onOk={()=>{
                setShowmodal(false)
                setSelectedRow(undefined)
                message.info("取消成功")
              }}
             > 
                <Form>
                    <Item label="用户名" >
                        {selectedRow?selectedRow.user_name:""}
                    </Item>
                    <Item label="用户ID" >
                       {selectedRow?selectedRow.user_id:""}
                    </Item>
                    <Item label="行程开始时间" >
                       {selectedRow?selectedRow.start_time:""}
                    </Item>
                </Form>
             </Modal>
        </Card>
  </div>;
};

export default OrderPage;
