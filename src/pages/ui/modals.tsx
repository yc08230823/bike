// import React,{ useState } from 'react';
// import { Card,Modal,Button } from 'antd';
// import './style.less';
// interface IModalPageProps {
// }

// const ModalPage: React.FunctionComponent<IModalPageProps> = (props) => {
//   const [ modalVisbel,setVisibel ] = useState({
//     modal1:false,
//     modal2:false,
//     modal3:false,
//     modal4:false
//   });

//   let { modal1,modal2,modal3,modal4 } = modalVisbel;


//   let handleOpen =  (modalName:'modal1'|'modal2'|'modal3'|'modal4')=>{
//     let config = {
//       modal1:false,
//       modal2:false,
//       modal3:false,
//       modal4:false
//     }
//     config[modalName] = true;
//     setVisibel(config);
//   }

//   let handClose = ()=>{
//     let config = {
//       modal1:false,
//       modal2:false,
//       modal3:false,
//       modal4:false
//     }
//     setVisibel(config);
//   }
//   let handleStateOpen = (state:"success"|"info"|"error"|"warning")=>{
//       Modal[state]({
//         title:state,
//         content:state+'出现了'})
//   }
//   return <div className="ModalPage">
//        <Card>
//         <div className="card-content">
//             <Button onClick={()=>{handleOpen('modal1')}} >模态框显示</Button>
//             <Button onClick={()=>{handleOpen('modal2')}} >没有页脚de模态框</Button>
//             <Button onClick={()=>{handleOpen('modal3')}} >自定义确定取消的模态框</Button>
//             <Button onClick={()=>{handleOpen('modal4')}} >据顶部20像素的模态框</Button>
//           </div>
//        </Card>
//        <Card>
//         <div className="card-content">
//             <Button  onClick={()=>{handleStateOpen('success')}} >成功success</Button>
//             <Button type='primary'  onClick={()=>{handleStateOpen('info')}} >信息info</Button>
//             <Button   onClick={()=>{handleStateOpen('warning')}} >警告warning</Button>
//             <Button type='danger'  onClick={()=>{handleStateOpen('error')}} >错误error</Button>
//           </div>
//        </Card>
//        <Modal
//         title='壹号模态框'
//         visible={modal1}
//         onCancel={()=>{handClose()}}
//         >
//           壹号模态框
//        </Modal>
//        <Modal
//         title='没有页脚de模态框'
//         visible={modal2}
//         onCancel={()=>{handClose()}}
//         footer={null}
//         >
//           没有页脚de模态框
//        </Modal>
//        <Modal
//         title='自定义确定取消的模态框'
//         visible={modal3}
//         onCancel={()=>{handClose()}}
//         okText={'成功了😊'}
//         cancelText={'👴觉得不行'}
//         >
//           没有页脚de模态框
//        </Modal>
//        <Modal
//         title='据顶部20像素的模态框'
//         style={{top:20}}
//         visible={modal4}
//         onCancel={()=>{handClose()}}
//         okText={'确定'}
//         cancelText={'取消'}
//         >
//           没有页脚de模态框
//        </Modal>
//   </div> ;
// };

// export default ModalPage;


import React,{useState} from 'react';
import { Card,Button,Modal } from "antd"
import "./style.less"

interface IModalsProps {
}

const Modals: React.FunctionComponent<IModalsProps> = (props) => {
    const [modalVisible, setModalVisible] = useState({
        modal1:false,
        modal2:false,
        modal3:false,
        modal4:false
    })
    let { modal1,modal2,modal3,modal4 } = modalVisible
    const handClose =()=>{
      let   config = {
                  modal1:false,
                  modal2:false,
                  modal3:false,
                  modal4:false
      }
      setModalVisible(config);
    }
    const handleClose =(modalName:"modal1"|"modal2"|"modal3"|"modal4") => {
        let   config = {
            modal1:false,
            modal2:false,
            modal3:false,
            modal4:false
        }
        config[modalName]=true
        setModalVisible(config)
    }
    let handleStateOpen = (state:"success"|"info"|"error"|"warning")=>{
              Modal[state]({
                title:state,
                content:state+'出现了'})
          }
  return <div>
             <Card title="基础模态框" className="buttons" >
                  <Button type="primary" onClick={()=>handleClose("modal1")}>Open</Button>
                  <Button type="primary" onClick={()=>handleClose("modal2")}>自定义页脚</Button>
                  <Button type="primary" onClick={()=>handleClose("modal3")}>顶部20px</Button>
                  <Button type="primary" onClick={()=>handleClose("modal4")}>水平垂直居中</Button>
             </Card>
             <Card title="信息确认框" className="buttons" >
                  <Button type="primary" onClick={()=>handleStateOpen("error")}>Confirm</Button>
                  <Button type="primary" onClick={()=>handleStateOpen("info")}>Info</Button>
                  <Button type="primary" onClick={()=>handleStateOpen("success")}>Success</Button>
                  <Button type="primary" onClick={()=>handleStateOpen("warning")}>Waring</Button>
             </Card>
             <Modal
               title="React"
               visible={modal1}
               onOk={()=>handClose()}
             >
                 <p>欢迎学习慕课新推出的React高级课程</p>
             </Modal>
             <Modal
               title="React"
               visible={modal2}
               okText="确定"
               cancelText="取消"
               onOk={()=>handClose()}
             >
                 <p>欢迎学习慕课新推出的React高级课程</p>
             </Modal>
             <Modal
               title="React"
               visible={modal3}
               style={{top:20}}
               okText="确定"
               cancelText="取消"
               onOk={()=>handClose()}
             >
                 <p>欢迎学习慕课新推出的React高级课程</p>
             </Modal>
             <Modal
               title="React"
               centered
               visible={modal4}
               onOk={()=>handClose()}
             >
                 <p>欢迎学习慕课新推出的React高级课程</p>
             </Modal>
 
         </div>;
};

export default Modals;
