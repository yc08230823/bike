import * as React from 'react';
import {Layout} from 'antd'
 //@ts-ignore
import NavLeft from '@/component/NavLeft/index.tsx'
import NavHeader from '@/component/NavHeader'
import "./loading.less"
// 相当于  const Sider=Layout.Sider
const {Sider,Header,Content,Footer}=Layout;
interface I_layoutProps {

}

const _layout: React.FunctionComponent<I_layoutProps> = (props) => {
  //@ts-ignore
  if(props.location.pathname.includes("/detail")){
    return <div>
       <NavHeader menuType="second"/>
       {props.children}
    </div>
  }
  return <Layout className="_layout">
    <Sider style={{height:'100vh',marginRight:20}}
    width={200}
    // collapsedWidth={0}
    // breakpoint={"lg"}
    >
     <NavLeft/>
    </Sider>
     <Content>
        <NavHeader/>
          {/* 根据路由加载的页面 */}
           <div style={{paddingTop:20}} >
              {props.children}
           </div>
         <Footer>页脚</Footer>
     </Content>
     
  </Layout>;
};

export default _layout;
