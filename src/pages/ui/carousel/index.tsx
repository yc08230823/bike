import * as React from 'react';
import { Carousel,Card } from "antd"
interface ICarouseProps {
}

const Carouse: React.FunctionComponent<ICarouseProps> = (props) => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
      
  return <div className="Carousr">
      <Card title="轮播图">
         <Carousel autoplay effect="fade">
            <div>
               <h3 style={contentStyle}>1</h3>
            </div>
            <div>
               <h3 style={contentStyle}>2</h3>
            </div>
            <div>
               <h3 style={contentStyle}>3</h3>
            </div>
            <div>
               <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
      </Card>
  </div>;
};

export default Carouse;
