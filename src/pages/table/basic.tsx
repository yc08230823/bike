// import * as React from 'react';
// import { Card,message,notification,Table  } from 'antd';
// import { ColumnProps} from 'antd/es/table';
// import SFaxios from '@/utils/SFaxios';

// interface IBasicPageProps {
// }

// interface tColumn {
//   id:string,
//   order_sn:string,
//   bike_sn:string,
//   user_id:string,
//   mobile:string,
//   distance:number,
//   start_time:number,
//   end_time:number,
//   key?:any
// }

// const BasicPage: React.FunctionComponent<IBasicPageProps> = (props) => {

//   const [ tableData,setTable ] = React.useState<tColumn[]>([])
//   //设置表格列的属性

//   const [ selectKey,setRowKey ] = React.useState<Array<any>>([])

//   const [ mutiKey,setMuti ] = React.useState<Array<any>>([])

//   const tableColumn:ColumnProps<tColumn>[] = [
//     {
//         title:'订单Id',
//         dataIndex:'id',
//         key:'id'
//     },
//     {
//         title:'订单编号',
//         dataIndex:'order_sn',
//         key:'order_sn'
//     },
//     {
//         title:'车辆编号',
//         dataIndex:'bike_sn',
//         key:'bike_sn'
//     },
//     {
//         title:'用户编号',
//         dataIndex:'user_id',
//         key:'user_id'
//     },
//     {
//         title:'手机号',
//         dataIndex:'mobile',
//         key:'mobile'
//     },
//     {
//         title:'距离',
//         dataIndex:'distance',
//         key:'distance'
//     },
//     {
//       title:'开始时间',
//       dataIndex:'start_time',
//       key:'start_time'
//     },
//     {
//       title:'结束时间',
//       dataIndex:'end_time',
//       key:'end_time'
//     },
//   ]

//   //获取远程数据
//   const requestList = async ()=>{
//       try{
//         let res:any = await SFaxios.ajax({url:'/order/list'})
//         // resolve
//         let data = res.result.item_list;
//         //让每一条记录 有位移的键值
//         data.forEach((item:tColumn,index:any) => {
//           item.key = index
//         });
//         setTable(data)
//       }catch(e){
//         message.info('出现了问题，不过不是你的问题')
//         message.info(e.messsage)
//       }
//   }

//   //compomentDidMount
//     React.useEffect(()=>{
//       requestList();
//   },[])

//   //componentDidUpDate


//   return <div className="BasicPage">
//       <Card title='多选表格组件'>
//           <Table
//               columns={tableColumn}
//               dataSource={tableData}
//               rowSelection={{
//                 type:'checkbox',
//                 selectedRowKeys:mutiKey,
//                 onChange:(selectkeys,selectRows)=>{
//                   console.log(selectkeys,selectRows)
//                   setMuti(selectkeys)
//                 }
//               }}
//           />
//       </Card>
//       <Card title='单选按钮表格'>
//           <Table
//               columns={tableColumn}
//               dataSource={tableData}
//               rowSelection={{
//                 type:'radio',
//                 selectedRowKeys:selectKey,
//                 onChange:(selectRowkey,selectRows:any)=>{
//                    setRowKey(selectRowkey)
//                    notification.info({
//                      message:'订单信息',
//                      description:`订单${selectRows[0].id} 结束时间${selectRows[0].end_time}`
//                    })
//                 }
//               }}
//               onRow={record=>{
//                 return {
//                   onClick:()=>{
//                     setRowKey([record.key])
//                   }
//                 }
//               }}
//           />
//       </Card>
//       <Card title='基础表格组件'>
//           <Table
//               columns={tableColumn}
//               dataSource={tableData}
//           />
//       </Card>
//   </div> ;
// };

// export default BasicPage;

import React,{ useEffect,useState } from 'react';
import { Button,Card,message,Table,Modal} from "antd"
import SFaxios from "@/utils/SFaxios"
import { ColumnProps} from 'antd/es/table';
interface IBasicPageProps {
}

interface columns {
    id:string,
    userName:string,
    sex:string,
   
}
const BasicPage: React.FunctionComponent<IBasicPageProps> = (props) => {
    const [dataSourse, setDataSourse] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const columns:ColumnProps<columns>[] = [
        {
            title:"id",
            dataIndex:"id",
        },
        {
            title:"用户名",
            dataIndex:"userName",
        },
        {
            title:"性别",
            dataIndex:"sex",
            render(sex){
                return sex == 1 ? "男":"女"
            }
        },
        {
            title:"状态",
            dataIndex:"state",
            render(state){
                let config = {
                    "1":"咸鱼一条",
                    "2":"风华浪子 ",
                    "3":"北大才子",
                    "4":"百度FE",
                    "5":"创业者"
                }
                return config[state]
            }
        },
        {
            title:"爱好",
            dataIndex:"interest",
            render(interest){
                let config = {
                    "1":"游泳",
                    "2":"打篮球",
                    "3":"踢足球",
                    "4":"跑步",
                    "5":"爬山",
                    "6":"桌球",
                    "7":"骑行",
                    "8":"麦霸",
                }
                return config[interest]
            }
        },
        {
            title:"生日",
            dataIndex:"birthday"
        },
        {
            title:"地址",
            dataIndex:"address"
        },
        {
            title:"早起事件",
            dataIndex:"time"
        },
        
    ]
    const data =[
        {
            id:"0",
            userName:"Jack",
            sex:"1",
            state:"1",
            interest:"1",
            birthday:"2000-01-01",
            address:"北京市海淀区奥林匹克公园",
            time:"09:00"
        },
        {
            id:"1",
            userName:"tom",
            sex:"1",
            state:"1",
            interest:"1",
            birthday:"2000-01-01",
            address:"北京市海淀区奥林匹克公园",
            time:"09:00"
        },
        {
            id:"2",
            userName:"lili",
            sex:"1",
            state:"1",
            interest:"1",
            birthday:"2000-01-01",
            address:"北京市海淀区奥林匹克公园",
            time:"09:00"
        }
    ]
    useEffect(() => {
        request()
    }, []);
   const  request = async () =>{
       let res:any =await SFaxios.ajax({url:"/table/list"})
       let data = res.result.list;
       data.forEach((item:any,index:any) => {
            item.key=index
       });
       setDataSourse(data)
   } 
  return <div className="BasicPage">
          <Card title="基础表格" >
              <Table
               dataSource={data}
               columns={columns}
              />
          </Card>
          <Card title="动态数据渲染表格-Mock" >
              <Table
               dataSource={dataSourse}
               columns={columns}
              />
          </Card>
          <Card title="Mock-单选" >
              <Table
               dataSource={dataSourse}
               columns={columns}
               onRow={(record:any,index:any)=>{
                return {
                    onClick: ()=>{
                        Modal.info({
                            title:"信息",
                            content:`用户名：${record.userName},用户爱好：${record.interest}`
                        })
                        
                        let selectKeys:any = [index]
                        setSelectedRowKeys(selectKeys)
                    }
                }  
               }}
               rowSelection={
                {
                    type:"radio",
                    selectedRowKeys,
                    onChange:(selectedRowKeys:any, selectedRows)=>{
                        setSelectedRowKeys(selectedRowKeys)
                    }
                }
               }
              />
          </Card>
          <Card title="Mock-多选" >
              <Table
               dataSource={dataSourse}
               columns={columns}
               onRow={(record:any,index:any)=>{
                return {
                    onClick: ()=>{
                        Modal.info({
                            title:"信息",
                            content:`用户名：${record.userName},用户爱好：${record.interest}`
                        })
                        
                        let selectKeys:any = [index]
                        setSelectedRowKeys(selectKeys)
                    }
                }  
               }}
               rowSelection={
                {
                    type:"checkbox",       //单选还是多选
                    selectedRowKeys,       //选中的项
                    onChange:(selectedRowKeys:any, selectedRows)=>{         //onChange事件
                        setSelectedRowKeys(selectedRowKeys)
                    }
                }
               }
              />
          </Card>
          <Card title="Mock-分页" >
              <Table
               dataSource={dataSourse}
               columns={columns}
               onRow={(record:any,index:any)=>{
                return {
                    onClick: ()=>{
                        Modal.info({
                            title:"信息",
                            content:`用户名：${record.userName},用户爱好：${record.interest}`
                        })
                        
                        let selectKeys:any = [index]
                        setSelectedRowKeys(selectKeys)
                    }
                }  
               }}
               pagination={{}}
              />
          </Card>
  </div>;
};

export default BasicPage;
function selectedRows(selectedRowKeys: never[], selectedRows: any) {
    throw new Error('Function not implemented.');
}

