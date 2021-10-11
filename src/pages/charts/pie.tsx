// import * as React from 'react';
// import { Card } from 'antd';
// import ReactEcharts from 'echarts-for-react';
// import { EChartsOption } from 'echarts';

// interface IPiePageProps {}

// const PiePage: React.FunctionComponent<IPiePageProps> = props => {
//   const myPieOption1: EChartsOption = {
//     title: {
//       text: '单车行程统计',
//     },
//     tooltip: {},
//     legend: {},
//     series: [
//       {
//         type: 'pie',

//         data: [
//           { value: 735, name: '周一' },
//           { value: 580, name: '周二' },
//           { value: 484, name: '周三' },
//           { value: 300, name: '周四' },
//           { value: 1048, name: '周五' },
//           { value: 300, name: '周六' },
//           { value: 1048, name: '周日' },
//         ],
//       },
//     ],
//   };
//   const myPieOption2: EChartsOption = {
//     title: {
//       text: '单车行程统计',
//     },
//     tooltip: {},
//     legend: {},
//     toolbox: {
//       show: true,
//       feature: {
//         restore: {},
//         saveAsImage: {},
//       },
//     },
//     series: [
//       {
//         type: 'pie',
//         radius: ['40%', '70%'],
//         label: {
//           show: false,
//           position: 'center',
//           fontSize: 28,
//           fontWeight: 'bold',
//         },
//         labelLine: {
//           show: false,
//         },
//         itemStyle: {
//           borderWidth: 3,
//           borderColor: '#fff',
//           borderRadius: 5,
//         },
//         emphasis: {
//           label: {
//             show: true,
//           },
//         },
//         data: [
//           { value: 735, name: '周一' },
//           { value: 580, name: '周二' },
//           { value: 484, name: '周三' },
//           { value: 300, name: '周四' },
//           { value: 1048, name: '周五' },
//           { value: 300, name: '周六' },
//           { value: 1048, name: '周日' },
//         ],
//       },
//     ],
//   };
//   return (
//     <div className="PiePage">
//       <Card title="环形图">
//         <ReactEcharts option={myPieOption1} style={{ height: 500 }} />
//       </Card>

//       <Card>
//         <ReactEcharts option={myPieOption2} style={{ height: 500 }} />
//       </Card>
//     </div>
//   );
// };

// export default PiePage;

import * as React from 'react';
import ReactEchart from 'echarts-for-react';
import { Card } from "antd"
interface IPiePageProps {
}

const PiePage: React.FunctionComponent<IPiePageProps> = (props) => {
    let option = {
        title:{
            text:"用户骑行订单",
            x:"center"                                   //标题居中
        },    
        legend:{                                         //小标题
           data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
           orient:"vertical",        //data在右侧显示
           right:10,
           top:20,
           buttom:20
        },
        tooltip:{  
            trigger:"item",                     //展示每一项
            formatter:"{a}<br/>{b}:{c}({d}%)"   //自定义
        },
        series:[
            {
               
                name:"订单量",
                type: 'pie',
                data: [
                    {
                        value:1000,
                        name:"周一"
                    },
                    {
                        value:1000,
                        name:"周二"
                    },
                    {
                        value:2000,
                        name:"周三"
                    },
                    {
                        value:1500,
                        name:"周四"
                    },
                    {
                        value:3000,
                        name:"周五"
                    },
                    {
                        value:2000,
                        name:"周六"
                    }, {
                        value:1200,
                        name:"周日"
                    },
                ]
              
            }
        ]
    }  
    let option2 = {
        title:{
            text:"用户骑行订单",
            x:"center"                                   //标题居中
        },    
        legend:{                                         //小标题
           data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
           orient:"vertical",        //data在右侧显示
           right:10,
           top:20,
           buttom:20
        },
        tooltip:{
            trigger:"item",                     //展示每一项
            formatter:"{a}<br/>{b}:{c}({d}%)"   //自定义
        },
        series:[
            {
               
                name:"订单量",
                type: 'pie',
                radius:["50%","80%"],      //实现环形
                data: [ 
                    {
                        value:1000,
                        name:"周一"
                    },
                    {
                        value:1000,
                        name:"周二"
                    },
                    {
                        value:2000,
                        name:"周三"
                    },
                    {
                        value:1500,
                        name:"周四"
                    },
                    {
                        value:3000,
                        name:"周五"
                    },
                    {
                        value:2000,
                        name:"周六"
                    }, {
                        value:1200,
                        name:"周日"
                    },
                ]
              
            }
        ]
    }
    let option3 = {
        title:{
            text:"用户骑行订单",
            x:"center"                                   //标题居中
        },    
        legend:{                                         //小标题
           data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
           orient:"vertical",        //data在右侧显示
           right:10,
           top:20,
           buttom:20
        },
        tooltip:{
            trigger:"item",                     //展示每一项
            formatter:"{a}<br/>{b}:{c}({d}%)"   //自定义
        },
        series:[
            {
               
                name:"订单量",
                type: 'pie',
                data: [ 
                    {
                        value:1000,
                        name:"周一"
                    },
                    {
                        value:1000,
                        name:"周二"
                    },
                    {
                        value:2000,
                        name:"周三"
                    },
                    {
                        value:1500,
                        name:"周四"
                    },
                    {
                        value:3000,
                        name:"周五"
                    },
                    {
                        value:2000,
                        name:"周六"
                    }, {
                        value:1200,
                        name:"周日"
                    },
                ].sort((a,b)=>a.value-b.value),
                roseType:"radius"                //通过半径大小来区分数据
                
            }
        ]
    }
  return <div>
       <Card title="饼图一" >
             <ReactEchart 
             style={{height:500}}
             option={option}
             />
       </Card> 
       <Card title="饼图二" >
             <ReactEchart 
             style={{height:500}}
             option={option2}
             />
       </Card> 
       <Card title="饼图三" >
             <ReactEchart 
             style={{height:500}}
             option={option3}
             />
       </Card> 
  </div>;
};

export default PiePage;
