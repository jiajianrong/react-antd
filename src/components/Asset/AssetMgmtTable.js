import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';


import { Table, Icon } from 'antd';



const columns = [{
  title: '资产方编号',
  dataIndex: 'id',
  key: 'id'
}, {
  title: '资产方名称',
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
      <a href="javascript:;">修改/查看</a>
      <span className="ant-divider" />
      <a href="javascript:;">删除</a>
    </span>
  ),
}];




class AssetMgmtTable extends React.Component {
    
    
    render() {
        let data = this.props.assetsTable;
        
        return (
            <div className="AppComponent AssetMgmtTable">
                <Table columns={columns} dataSource={data} rowKey={record => record.id} />
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
        assetsTable: state.assetsTable,
    }

};




export default connect(mapStateToProps)(AssetMgmtTable);