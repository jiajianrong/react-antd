import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchGet, fetchPost} from '../../api/fetch';


import { updateAsset } from '../../actions/assetMgmt';


import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;



/**
 * 从table中获取某个item
 * @param {Object} table
 * @param {Object} key
 * @param {Object} value
 */
function findItemFromTable(table, key, value) {
    let results = table.filter((item) => {
        return item[key] === value;
    })
    return results[0];
}



class AssetMgmtUpdateForm extends React.Component {
    
    
    
    constructor(props) {
        super(props);
        
        this.state = {};
    }
    
    
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        let {dispatch, router} = this.props;
        
        // 保存item
        this.props.form.validateFieldsAndScroll((err, values) => {
            
            !err && fetchPost('api/asset/saveAsset', values, (data) => {
                
                // 更新store
                dispatch(updateAsset(values));
                
                router.push('asset/assetMgmt');
            });
            
        });
    }
    
    
    
    componentDidMount() {
       
       let assetsTable = this.props.assetsTable;
       
       // table在store里不存在，说明不是从table页过来的，强制返回table页
       if ( !assetsTable.length ) {
           this.props.router.replace('asset/assetMgmt');
       }
       
       let id = this.props.location.query.id;
       
       // 显示当前id的item数据
       let asset = findItemFromTable(assetsTable, 'id', id);
       this.setState(asset);
       
       // 也可以发请求获取，这里暂时先使用store里的数据，可以少一个api接口
       /*fetchGet('api/asset/getAsset', {id}, (data) => {
           this.setState(data);
       })*/
       
    }
    
    
    
    render() {
        
        const { getFieldDecorator } = this.props.form;
        
        const formItemLayout = {
            labelCol: {
                // xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                // xs: { span: 24 },
                sm: { span: 8 },
            },
        };
        
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    //span: 24,
                    offset: 0,
                },
                sm: {
                    //span: 14,
                    offset: 4,
                },
            },
        };
        
        return (
            <Form className="AppComponent AssetMgmtUpdateForm" onSubmit={this.handleSubmit}>
                
                <FormItem
                  {...formItemLayout}
                  label={(
                    <span>资产方编号&nbsp;</span>
                  )}
                  hasFeedback
                >
                  {getFieldDecorator('id', {
                    rules: [{ required: true, message: '请填写编号', whitespace: true }],
                    initialValue: this.state.id,
                  })(
                    <Input />
                  )}
                </FormItem>
                
                <FormItem
                  {...formItemLayout}
                  label={(
                    <span>资产方名称&nbsp;</span>
                  )}
                  hasFeedback
                >
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请填写名称', whitespace: true }],
                    initialValue: this.state.name,
                  })(
                    <Input />
                  )}
                </FormItem>
                
                
                <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">更新</Button>
                </FormItem>
                
            </Form>
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



// export default connect(mapStateToProps)(AssetMgmtQueryForm)
export default Form.create()(connect(mapStateToProps)(AssetMgmtUpdateForm));