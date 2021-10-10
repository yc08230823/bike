import * as React from 'react';
import{NavLink} from 'umi'
import {Layout} from 'antd'
import './style.less'

const {Header} =Layout;
interface INavHeaderProps {
   menuType?:"second"
}

const NavHeader: React.FunctionComponent<INavHeaderProps> = (props) => {
  const username='Tracy';
  const { menuType } = props
  return <div className="NavHeader">
   <Header className={menuType ==="second"?"second":"normal"} >欢迎你 {username}
   <NavLink to={'/logout'}>退出</NavLink>
   </Header>
    {
      menuType ==="second" ?"":<div className="header_bottom">
      <div className="pagetitle"  >
            首页
      </div>
      </div>
    }
  </div>;
};

export default NavHeader;

