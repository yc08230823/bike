import * as React from 'react';
import { Card, Space,Button,message   } from "antd"
interface IMessagePageProps {
}

const MessagePage: React.FunctionComponent<IMessagePageProps> = (props) => {
    const success = () => {
        message.success("全局提示框");
      };
      
      const error = () => {
        message.error('全局提示框');
      };
      
      const warning = () => {
        message.warning('全局提示框');
      };
  return <div>
              <Card title="全局提示框" >
                <Space>
                    <Button type="primary" onClick={success}>Success</Button>
                    <Button type="primary"  onClick={error}>Error</Button>
                    <Button type="primary" onClick={warning}>Warning</Button>
                </Space>,
              </Card>
  </div>;
};

export default MessagePage;
