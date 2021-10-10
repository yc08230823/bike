import  React,{useState} from 'react';
import { Card,Tabs } from "antd"
import { EditOutlined,PlusOutlined,DeleteOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
interface  TabsPageProps {
}

const TabsPage: React.FunctionComponent< TabsPageProps> = (props) => {
    const initialPanes = [
        { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
        { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
        {
          title: 'Tab 3',
          content: 'Content of Tab 3',
          key: '3',
          closable: false,
        },
      ];
      const [panes, setPanes] = useState(initialPanes)
   
  return <div className="Tabspage">
        <Card title="基础Tabs" >
            <Tabs>
              <TabPane tab={"tab1"} key="1" >Pane 1</TabPane>
              <TabPane tab={"tab2"} key="2" >Pane 2</TabPane>
              <TabPane tab={"tab3"} key="3" >Pane 3</TabPane>
            </Tabs>
        </Card>
        <Card title="Tabs带图标" >
            <Tabs defaultActiveKey="2">
                <TabPane
                    tab={ <span><PlusOutlined /> Tab 1</span>}key="1">
                      Tab 1
                 </TabPane>
                 <TabPane
                    tab={ <span><EditOutlined /> Tab 2</span>}key="2">
                      Tab 2
                 </TabPane>
                 <TabPane
                    tab={ <span><DeleteOutlined /> Tab 3</span>}key="3">
                      Tab 3
                 </TabPane>
            </Tabs>,
        </Card>
        <Card title="添加Tabs" >
            <Tabs defaultActiveKey="2">
                {panes.map(pane => (
                <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                    {pane.content}
                </TabPane>
                ))}
            </Tabs>
        </Card>
  </div>; 
};

export default TabsPage;
