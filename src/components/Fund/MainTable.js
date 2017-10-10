import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchPost} from '../../api/fetch';



import { Table, Icon, Modal } from 'antd';

const confirm = Modal.confirm;



class MainTable extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.columns = [{
          title: '资金方编号',
          dataIndex: 'id',
          key: 'id'
        }, {
          title: '资金方名称',
          dataIndex: 'name',
          key: 'name',
        }, {
          title: '签约主体',
          dataIndex: 'dealer',
          key: 'dealer',
        }, {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span>
              <Link to={{ pathname: '/fund/updateForm', query: {id: record.id} }}>修改/查看</Link>
              <span className="ant-divider" />
              <a onClick={()=>{this.deleteConfirm(record.id)}} href="javascript:;">删除</a>
            </span>
          ),
        }];
    }
    
    
    
    
    render() {
        let data = this.props.funds;
        
        return (
            <div className="AppComponent">
                <Table columns={this.columns} 
                       dataSource={data} 
                       rowKey={record=>record.id} 
                />
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
        funds: state.fund_list,
    }

};




export default connect(mapStateToProps)(MainTable);