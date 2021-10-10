import * as React from 'react';
import { Card,notification,Button,Space } from 'antd';
import { IconType,NotificationPlacement } from 'antd/es/notification';
import './style.less';

interface INotifyPageProps {
}

const NotifyPage: React.FunctionComponent<INotifyPageProps> = (props) => {
   
const openNotificationWithIcon = (type:IconType)=> {
    notification[type]({
      message: '发工资了',
      description:
        '上个月考勤22天，迟到12天，实发工资250，请笑纳',
    });
  };
  const openNotification = (placement:any) => {
    notification.info({
      message: '发工资了'+placement,
      description:
        '上个月考勤22天，迟到12天，实发工资250，请笑纳',
      placement,
    });
  };
  return <div className="NotifyPage">
      <Card title="不带位置的通知">
         <Space>
            <Button onClick={() => openNotificationWithIcon('success')} type="primary">Success</Button>
            <Button onClick={() => openNotificationWithIcon('info')} type="primary">Info</Button>
            <Button onClick={() => openNotificationWithIcon('warning')} type="primary">Warning</Button>
            <Button onClick={() => openNotificationWithIcon('error')} type="primary">Error</Button>
        </Space>,
      </Card>
      <Card title="带位置的通知">
         <Space>
            <Button onClick={() => openNotification('topLeft')} type="primary">topLeft</Button>
            <Button onClick={() => openNotification('topRight')} type="primary">topRight</Button>
            <Button onClick={() => openNotification('bottomLeft')} type="primary">bottomLeft</Button>
            <Button onClick={() => openNotification('bottomRight')} type="primary">bottomRight</Button>
        </Space>,
      </Card>
  </div> ;
};

export default NotifyPage;
