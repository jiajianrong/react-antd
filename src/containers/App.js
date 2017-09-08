import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Layout} from 'antd';

// normalize style
import './App.scss';

// 获取登录用户信息
import {getLoginUser} from '../actions/loginUser';
import AppHeader from './AppHeader';
import AppSider from './AppSider';


const {Content} = Layout;



class App extends Component {
    
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getLoginUser());
    }
    
    
    
    render() {
        return (
        
            <Layout className="App ant-layout ant-layout-has-sider" style={{ height: "100%" }}>
                
                <AppSider router={this.props.router} />
                
                <Layout>
                    <AppHeader />
                    <Content>{this.props.children}</Content>
                </Layout>
                
            </Layout>
            
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

/*const mapStateToProps = (state, ownProps) => {
    return {
        loginUser: state.loginUser
    }
};
export default connect(mapStateToProps)(App)*/


// jiajianrong 20170908
// App.js 不绑定store.getState
export default connect()(App)