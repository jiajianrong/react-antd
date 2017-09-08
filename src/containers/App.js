import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Layout, Menu, Icon} from 'antd';
import {fetchGet} from '../api/fetch';
// normalize style
import './App.scss';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;



class App extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            username: ''
        };
    }
    
    
    
    componentDidMount() {
        // this.props.dispatch(isShowFooter(true, 0));
        
        /*serverGet(
            API_CONFIG.mainHeadLine,
            '',
            (data) => {
                this.setState({headline: data.ret_result})
            }
        )*/
       
        console.log(this.props)
        
        const { dispatch } = this.props;
       
        this.setState({
            username: '58管理员'
        })
    }
    
    
    
    menuItemOnClick = ({ item, key, keyPath }) => {
        this.props.router.push({
            pathname: key
        });
    };
    
    
    
    render() {
        return (
        
            <Layout className="App ant-layout ant-layout-has-sider" style={{ height: "100%" }}>
                <Sider style={{ overflow: "auto" }}>
                    <div className="logo">Logo 信息管理后台</div>
                    <Menu
                      mode="inline"
                      theme="dark"
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
                </Sider>
                
                <Layout>
                    <Header>
                        header
                    </Header>
                    <Content>{this.props.children}</Content>
                    {/* <Footer>Footer</Footer> */}
                </Layout>
            </Layout>
            
        );
    }
}




/**
 * react-redux的connect，通过 connect(select)(App) 连接 store 和 App 容器组件
 * mapStateToProps方法返回的对象，以及附带的dispatch方法会 以props的形式传递到container
 * 即，在container中可以
 * const { dispatch, loginUserInfo } = this.props;
 * 
 */
const mapStateToProps = (state/*store.getState*/, ownProps) => {

    return {
        loginUserInfo: state.loginUserInfo
    }

};


export default connect(mapStateToProps)(App)