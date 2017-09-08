import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Layout, Icon} from 'antd';

// normalize style
import './AppHeader.scss';



const {Header} = Layout;



class AppHeader extends React.Component {
    
    
    render() {
        
        let { dispatch, loginUser } = this.props;
        
        return (
            <Header>
                <div className="AppHeader">
                    {loginUser.name} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <Link to="/quit">退出</Link>
                </div>
            </Header>
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
export default connect(mapStateToProps)(AppHeader)