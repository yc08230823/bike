import   React,{useState} from 'react';
import { Card,Row,Col,Modal } from "antd"
interface IGalleryProps {
}

const Gallery: React.FunctionComponent<IGalleryProps> = (props) => {
    const imgs = [
        ["1.png","2.png","3.png","4.png","5.png"],
        ["6.png","7.png","8.png","9.png","10.png"],
        ["11.png","12.png","13.png","14.png","15.png"],
        ["16.png","17.png","18.png","19.png","20.png"],
        ["21.png","22.png","23.png","24.png","25.png"]
    ]
    const [state, setState] = useState({
        currentImg:"",
        visite:false
    })
    const openGallery = (imgSrt:string) => {
        setState({
            currentImg:imgSrt,
            visite:true
        })
    }
    const imgList = imgs.map((list)=>list.map(item=>
       <Card cover={<img  src={"asset/"+item}/>} 
            onClick={()=>openGallery("asset/"+item)}
           style={{marginBottom:"10px"}}  >
            <Card.Meta
              title="React Admin"
              description="好好学习天天向上"
            />

       </Card>    
    ))
    let {currentImg,visite} = state
  return <div className="Gallery">
          <Row>
              <Col span={4}>
                {imgList[0]}
              </Col>
              <Col span={5}>
                {imgList[1]}
              </Col>
              <Col span={5}>
                {imgList[2]}
              </Col>
              <Col span={5}>
                {imgList[3]}
              </Col>
              <Col span={5}>
                {imgList[4]}
              </Col>
          </Row>
          <Modal
           width={1000}
           title="图片画廊"
           visible={visite}
           footer={null}
           onCancel={()=>{
              setState({
                currentImg:currentImg,
                visite:false
              })
           }}
          >
          <img src={currentImg}  />
          </Modal>
  </div>;
};

export default Gallery;
