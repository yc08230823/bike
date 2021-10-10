// import * as React from 'react';
// import ReactEchart from 'echarts-for-react';
// import { EChartsOption } from 'echarts';
// import { Card } from 'antd';

// interface IBarpageProps {}

// const Barpage: React.FunctionComponent<IBarpageProps> = props => {
//   const myChartOption1: EChartsOption = {
//     title: {
//       text: '用户骑行订单',
//     },
//     xAxis: {
//       type: 'category', //横轴类别,
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     },
//     yAxis: {
//       type: 'value',
//     },
//     tooltip: {
//       trigger: 'axis',
//     },
//     series: [
//       {
//         type: 'bar',
//         showBackground: true,
//         backgroundStyle: {
//           color: 'rgba(180, 180, 180, 0.2)',
//         },
//         data: [25, 63, 64, 53, 23, 45, 63],
//       },
//     ],
//   };
//   const myChartOption2: EChartsOption = {
//     title: {
//       text: '用户骑行订单',
//     },
//     xAxis: {
//       type: 'category', //横轴类别,
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     },
//     yAxis: {
//       type: 'value',
//     },
//     tooltip: {
//       trigger: 'axis',
//     },
//     legend: {
//       data: ['ofo', '摩拜', '小蓝'],
//     },
//     series: [
//       {
//         name: 'ofo',
//         type: 'bar',
//         showBackground: true,
//         backgroundStyle: {
//           color: 'rgba(180, 180, 180, 0.2)',
//         },
//         data: [25, 63, 64, 53, 23, 45, 63],
//       },
//       {
//         name: '摩拜',
//         type: 'bar',
//         showBackground: true,
//         backgroundStyle: {
//           color: 'rgba(180, 180, 180, 0.2)',
//         },
//         data: [25, 32, 34, 53, 23, 35, 62],
//       },
//       {
//         name: '小蓝',
//         type: 'bar',
//         showBackground: true,
//         backgroundStyle: {
//           color: 'rgba(180, 180, 180, 0.2)',
//         },
//         data: [63, 63, 64, 53, 23, 25, 45],
//       },
//     ],
//   };
//   return (
//     <div className="Barpage">
//       <Card title="柱状图" style={{ marginBottom: 10 }}>
//         <ReactEchart option={myChartOption1} style={{ height: 500 }} />
//       </Card>
//       <Card>
//         <ReactEchart option={myChartOption2} style={{ height: 500 }} />
//       </Card>
//     </div>
//   );
// };

// export default Barpage;

import  React,{useEffect} from 'react';
import { Card } from "antd"
import echartTheme from "./echartTheme"
import ReactEchart from 'echarts-for-react';
import echarts from "echarts"  
import "echarts/lib/chart/bar"                                    //柱形图
import "echarts/lib/component/tooltip"                            //滑上去显示的数据
import "echarts/lib/component/legend"
interface IBarpageProps {
}

const Barpage: React.FunctionComponent<IBarpageProps> = (props) => {
    useEffect(()=>{
       echarts.registerTheme("Imooc",echartTheme)   
    },[])
    let option = {
        title:{
            text:"用户骑行订单"
        },
        tooltip:{
           trigger:"axis"
        },
        xAxis:{
             data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
       },
       yAxis:{
           type:"value"
       },
      series: [
           {
             name:"订单量",
             data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
             type: 'bar',
           }
         ]
   }
   let option2 = {
    title:{
        text:"用户骑行订单"
    },    
    legend:{                                         //小标题
       data:["OFO","摩拜","小蓝"]
    },
    tooltip:{
       trigger:"axis"
    },
    xAxis:{
         data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
   },
   yAxis:{
       type:"value"
   },
  series: [
       {
         name:"OFO",
         data: [2000, 3000, 5500, 7000, 8000, 12000, 20000],
         type: 'bar',
       },
       {
           name:"摩拜",
           data: [1500, 3000, 4500, 6000, 8000, 10000, 15000],
           type: 'bar',
       },
       {
           name:"小蓝",
           data: [1000, 2000, 2500, 4000, 6000, 7000, 8000],
           type: 'bar',
       }
     ]
}
  return <div>
      <Card title="柱状图标之一" >
          <ReactEchart option={option}  style={{height:500}}/>
      </Card>
      <Card title="柱状图标之二" >
          <ReactEchart option={option2}  theme="Imooc" style={{height:500}}/>
      </Card>
  </div>;
};

export default Barpage;


