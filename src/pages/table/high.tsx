// import * as React from 'react';
// import { Card,Table,message } from 'antd';
// import { ColumnProps } from 'antd/es/table';
// import SFaxios from '@/utils/SFaxios';

// interface IHightPageProps {
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

// const HightPage: React.FunctionComponent<IHightPageProps> = (props) => {

//   const tableColumn:ColumnProps<tColumn>[] = [
//     {
//         title:'订单Id',
//         dataIndex:'id',
//         key:'id'
//     },
//     {
//         title:'订单编号',
//         dataIndex:'order_sn',
//         key:'order_sn',
//         sorter:(a,b)=>{
//           return a.order_sn.length - b.order_sn.length;
//         }

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
//         key:'mobile',
//         sorter:(a:any,b:any)=>{
//           return a.mobile - b.mobile;
//         }
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
//     }
//   ]
//   const tableColumn2:ColumnProps<tColumn>[] = [
//     {
//         title:'订单Id',
//         dataIndex:'id',
//         key:'id',
//         width:100,
//         fixed:'left'
//     },
//     {
//         title:'订单编号',
//         dataIndex:'order_sn',
//         key:'order_sn',
//         fixed:'left',
//         sorter:(a,b)=>{
//           return a.order_sn.length - b.order_sn.length;
//         }

//     },
//     {
//         title:'车辆编号',
//         dataIndex:'bike_sn',
//         key:'bike_sn'
//     },
//     {
//         title:'用户编号',
//         dataIndex:'user_id',
//         key:'user_id',
//         width:100
//     },
//     {
//         title:'手机号',
//         dataIndex:'mobile',
//         key:'mobile',
//         sorter:(a:any,b:any)=>{
//           return a.mobile - b.mobile;
//         },
//         width:100
//     },
//     {
//         title:'距离',
//         dataIndex:'distance',
//         key:'distance',
//         width:100
//     },
//     {
//       title:'开始时间',
//       dataIndex:'start_time',
//       key:'start_time',
//       width:100
//     },
//     {
//       title:'结束时间',
//       dataIndex:'end_time',
//       key:'end_time',
//       width:100
//     },
//     {
//       title:'结束时间',
//       dataIndex:'end_time',
//       key:'end_time',
//       width:100
//     },
//     {
//       title:'结束时间',
//       dataIndex:'end_time',
//       key:'end_time',
//       width:100
//     },
//     {
//       title:'结束时间',
//       dataIndex:'end_time',
//       key:'end_time',
//       width:100
//     },
//     {
//       title:'结束时间',
//       dataIndex:'end_time',
//       key:'end_time',
//       width:80,
//       fixed:'right'
//     }
//   ]
//   const [ tableData,setTable ] = React.useState<tColumn[]>([])
//   //请求数据的方法
//   const requestList = async ()=>{
//     try{
//       let res:any = await SFaxios.ajax({url:'/order/list'})
//       // resolve
//       let data = res.result.item_list;
//       //让每一条记录 有位移的键值
//       data.forEach((item:tColumn,index:any) => {
//         item.key = index
//       });
//       setTable(data)
//     }catch(e){
//       message.info('出现了问题，不过不是你的问题')
//       message.info(e.message)
//     }
// }

//   //compomentDidMount
//   React.useEffect(()=>{
//     requestList();
//   },[])

//   //通过scroll 给表格指定一个滚动范围
//   return <div className="HightPage">
//     <Card title='横轴固定'>
//         <Table
//           columns={tableColumn2}
//           dataSource={tableData}
//           scroll={{x:1600}}
//         />
//     </Card>
//     {/* 对横向宽度进行一个设置 */}
//     <Card title='表头固定'>
//         <Table
//           columns={tableColumn}
//           dataSource={tableData}
//           scroll={{y:200}}
//         />
//     </Card>
//     <Card title='表格列排序'>
//         <Table
//           columns={tableColumn}
//           dataSource={tableData}
//         />
//     </Card>
//   </div> ;
// };

// export default HightPage;

import React,{ useEffect,useState } from 'react';
import { Card,Table,Badge } from "antd"
import SFaxios from "@/utils/SFaxios"
   
    

interface IHightPageProps {
}

interface columns {
  id:string,
  userName:string,
  sex:string,
 
}
const HightPage: React.FunctionComponent<IHightPageProps> = (props) => {
const [dataSource, setDataSource] = useState();
const [dataSource1, setDataSource1] = useState();
const  request = async () =>{
  let res:any =await SFaxios.ajax({url:"/table/list"})
  let data = res.result.list;
  data.forEach((item:any,index:any) => {
        item.key=index
});
setDataSource(data)
} 
const  request1 = async () =>{
  let res:any =await SFaxios.ajax({url:"/table/hight/list"})
  let data = res.result.list;
  data.forEach((item:any,index:any) => {
        item.key=index
});
setDataSource1(data)
} 


useEffect(() => {
  request1()
  request()
}, []);

  const columns = [
    {
        title: 'id',
        width:80,
        dataIndex: 'id'
    },
    {
        title: '用户名',
        width: 80,
        dataIndex: 'userName'
    },
    {
        title: '性别',
        width: 80,
        dataIndex: 'sex',
        render(sex:string) {
            return sex == "1" ? '男' : '女'
        }
    },
    {
        title: '状态',
        width: 80,
        dataIndex: 'state',
        render(state:string) {
            let config = {
                '1': '咸鱼一条',
                '2': '风华浪子',
                '3': '北大才子',
                '4': '百度FE',
                '5': '创业者'
            }
            return config[state];
        }
    },
    {
        title: '爱好',
        width: 80,
        dataIndex: 'interest',
        render(abc:string) {
            let config = {
                '1': '游泳',
                '2': '打篮球',
                '3': '踢足球',
                '4': '跑步',
                '5': '爬山',
                '6': '骑行',
                '7': '桌球',
                '8': '麦霸'
            }
            return config[abc];
        }
    },
    {
        title: '生日',
        width: 120,
        dataIndex: 'birthday'
    },
    {
        title: '地址',
        width: 120,
        dataIndex: 'address'
    },
    {
        title: '早起时间',
        width: 80,
        dataIndex: 'time'
    }
]
const columns2 = [
  {
      title: 'id',
      width: 80,
      fixed:'left',
      dataIndex: 'id'
  },
  {
      title: '用户名',
      width: 80,
      fixed: 'left',
      dataIndex: 'userName'
  },
  {
      title: '性别',
      width: 80,
      dataIndex: 'sex',
      render(sex:string) {
          return sex == "1" ? '男' : '女'
      }
  },
  {
      title: '状态',
      width: 80,
      dataIndex: 'state',
      render(state:string) {
          let config = {
              '1': '咸鱼一条',
              '2': '风华浪子',
              '3': '北大才子',
              '4': '百度FE',
              '5': '创业者'
          }
          return config[state];
      }
  },
  {
      title: '爱好',
      width: 80,
      dataIndex: 'interest',
      render(abc:string) {
          let config = {
              '1': '游泳',
              '2': '打篮球',
              '3': '踢足球',
              '4': '跑步',
              '5': '爬山',
              '6': '骑行',
              '7': '桌球',
              '8': '麦霸'
          }
          return config[abc];
      }
  },
  {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  },
  {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
  },
  {
      title: '地址',
      width: 120,
      fixed: 'right',
      dataIndex: 'address'
  },
  {
      title: '早起时间',
      width: 80,
      fixed: 'right',
      dataIndex: 'time'
  }
]

const [sortOrder, setSortOrder] = useState();

const columns3 = [
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
      render(sex:string){
          return sex == "1" ? "男":"女"
      }
  },
  {
      title:"年龄",
      dataIndex:"age",
      sorter:(a,b)=>{
           return a.age - b.age
      },
      sortOrder:sortOrder
  },
  {
      title:"状态",
      dataIndex:"state",
      render(state:string){
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
      render(interest:string){
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
      dataIndex:"birthday",
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
const columns4 = [
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
      render(sex:string){
          return sex == "1" ? "男":"女"
      }
  },
  {
      title:"年龄",
      dataIndex:"age",
      sorter:(a,b)=>{
           return a.age - b.age
      },
      sortOrder:sortOrder
  },
  {
      title:"状态",
      dataIndex:"state",
      render(state:string){
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
    render(interest:string){
        let config = {
            "1": <Badge status="success"   text="成功" />,
            "2": <Badge status="error" text="报错" />,
            "3": <Badge status="default" text="默认" />,
            "4": <Badge status="warning" text="警告" />,
            "5": <Badge status="processing" text="进行中" />,
        }
        return config[interest]
    }
  },
  {
      title:"生日",
      dataIndex:"birthday",
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
//排序
 const  haddleChange = (pagination:any, filters:any, sorter:any) =>{
  setSortOrder(sorter.order)
}
  return <div className="heightpage">
      <Card title="头部固定" >
            <Table 
             bordered
             dataSource={dataSource}
             columns={columns}
             scroll={{ y: 240 }}
             />
      </Card>
      <Card title="左侧固定" >
            <Table 
             bordered
             dataSource={dataSource}
             columns={columns2}
             scroll={{ x: 1800}}
             />
      </Card>
      <Card title="年龄排序" >
            <Table 
             bordered
             dataSource={dataSource1}
             columns={columns3}
             onChange={haddleChange}
             />
      </Card>
      <Card title="操作按钮" >
            <Table 
             bordered
             dataSource={dataSource1}
             columns={columns4}
             onChange={haddleChange}
             />
      </Card>
  </div>;
};

export default HightPage;
