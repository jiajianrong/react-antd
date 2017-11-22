import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {isEqual} from 'lodash';
import {fetchGet, fetchPost, fetchWithPagination} from '../../api/fetch';


import { updatePagination, resetPagination, getTable, updateTableLoading } from '../../actions/fund';


import { Table, Icon, Modal } from 'antd';

const confirm = Modal.confirm;




//const isEqual = () => (false);



class PagingTable extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    
    
    /**
     * 设置表头
     */
    getColumns = () => (
        [{
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
        }]
    )
    
    
    
    
    
    deleteConfirm = (id) => {
        alert(`delete ${id}`)
    }
    
    
    
    
    /**
     * 分页或过滤或排序
     */
    handleTableChange = (pagination) => {
        
        let { dispatch, s_fund_query_form } = this.props;
        
        // 更新分页信息
        dispatch( updatePagination( pagination ) )
        
        // 请求
        dispatch( getTable( { ...s_fund_query_form, ...pagination } ) );
    }
    
    
    
    
    
    componentDidMount() {
        
        let { dispatch, s_fund_query_form, s_fund_pagination } = this.props;
        
        dispatch( getTable( { ...s_fund_query_form, ...s_fund_pagination } ) );
    }
    
    
    
    
    
    componentWillReceiveProps(nextProps) {
        
        let { dispatch, 
              s_fund_query_form, 
              s_fund_pagination
        } = this.props;
        
        let s_next_fund_query_form = nextProps.s_fund_query_form,
            s_next_fund_pagination = nextProps.s_fund_pagination;
        
        
        // 分页改变，忽略
        if ( ! isEqual( s_next_fund_pagination, s_fund_pagination ) ) return;
        
        // 查询表单改变
        if ( ! isEqual( s_next_fund_query_form, s_fund_query_form ) ) {
            
            let resetPager = {pageSize:10, current:1};
            
            dispatch( resetPagination() );
            
            // 确保store.getState().fund_pagination 已经改变
            setTimeout(()=> {
                dispatch( getTable( { ...s_next_fund_query_form, ...this.props.s_fund_pagination } ) )
            }, 0)
            
        }
    }
    
    
    
    
    
    
    render() {
        
        console.log('paging table render')
        
        let { s_fund_table, s_fund_pagination, s_fund_table_loading } = this.props;
        
        return (
            <div className="AppComponent">
                <Table columns={this.getColumns()}
                       rowKey={record=>record.id}
                       dataSource={s_fund_table}
                       pagination={s_fund_pagination}
                       loading={s_fund_table_loading}
                       onChange={this.handleTableChange}
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
        s_fund_table: state.fund_table,
        s_fund_pagination: state.fund_pagination,
        s_fund_query_form: state.fund_query_form,
        s_fund_table_loading: state.fund_table_loading,
    }

};




export default connect(mapStateToProps)(PagingTable);