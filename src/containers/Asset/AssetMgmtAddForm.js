import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchGet} from '../../api/fetch';


import { Row, Col, Button } from 'antd';




class AssetMgmtAddForm extends React.Component {
    
    
    
    
    render() {
        
        return (
            <div className="AssetMgmtAddForm">
                add form
            </div>
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
const mapStateToProps = (state/*store.getState*/, ownProps) => {

    return {
        // loginUser: state.loginUser
    }

};



export default connect(mapStateToProps)(AssetMgmtAddForm)