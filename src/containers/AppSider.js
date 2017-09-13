import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Layout, Menu, Icon} from 'antd';

// normalize style
import './AppSider.scss';



const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;




class AppSider extends React.Component {
    
    
    menuItemOnClick = ({ item, key, keyPath }) => {
        this.props.router.push({
            pathname: key
        });
    };
    
    
    
    
    renderMenu = (appMenuList) => {
        const loop = (item, i) => {
            const { name, key, icon, menu } = item;
                if (menu && menu.length > 0) {
                    return (<SubMenu key={key} title={<span><Icon type={ icon }/><span>{ name }</span></span>}>
                        { menu.map((child, j) => loop(child, j) ) }
                    </SubMenu>)
                } else {
                    return (<Menu.Item key={ key }>
                        <Icon type={ icon } />
                        <span>{ name }</span>
                    </Menu.Item>)
                }
        }
        
        return appMenuList.map((item, i) => loop(item, i));
    }
    
    
    
    
    
    render() {
        
        let { dispatch, loginUser } = this.props;
        
        let appMenuList = loginUser.role;
        
        return (
            <Sider className="AppSider">
                
                <div className="logo">Logo 信息管理后台</div>
                
                {/**
                <Menu
                  mode="inline"
                  theme="dark"
                  defaultSelectedKeys={['/home']}
                  onClick={ this.menuItemOnClick }
                >
                    <Menu.Item key="/home">
                        <Icon type="desktop" />
                        <span>首页</span>
                    </Menu.Item>
                    
                    <SubMenu key="/general" title={<span><Icon type="pie-chart" /><span>开放平台</span></span>}>
                        <Menu.Item key="/general/list">业务概述</Menu.Item>
                    </SubMenu>
                    
                    <SubMenu key="/yuefu" title={<span><Icon type="mail" /><span>月付</span></span>}>
                        <Menu.Item key="/home">首页</Menu.Item>
                    </SubMenu>
                </Menu>
                  */}
                
                <Menu
                      mode="inline"
                      theme="dark"
                      onClick={ this.menuItemOnClick }
                >
                    { appMenuList && appMenuList.length > 0 
                        ? this.renderMenu(appMenuList)
                        : false }
                </Menu>
                
            </Sider>
        );
    }
}




/**
 * react-redux的connect，通过 connect(select)(App) 连接 store 和 App 容器组件
 * mapStateToProps方法返回的对象，以及附带的dispatch方法会 以props的形式传递到container
 * 即，在container中可以
 * const { dispatch, loginUser } = this.props;
 * 
 */

const mapStateToProps = (state, ownProps) => {
    return {
        loginUser: state.loginUser
    }
};
export default connect(mapStateToProps)(AppSider)