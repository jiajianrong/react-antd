import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchGet, fetchPost} from '../../api/fetch';



import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;



class AssetMgmtAddForm extends React.Component {
    
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        // 保存item
        this.props.form.validateFieldsAndScroll((err, values) => {
            
            !err && fetchPost('api/asset/saveAsset', values, (data) => {
                this.props.router.push('asset/assetMgmt');
            });
            
        });
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
            <Form className="AppComponent AssetMgmtAddForm" onSubmit={this.handleSubmit}>
                
                <FormItem
                  {...formItemLayout}
                  label={(
                    <span>资产方编号&nbsp;</span>
                  )}
                  hasFeedback
                >
                  {getFieldDecorator('id', {
                    rules: [{ required: true, message: '请填写编号', whitespace: true }],
                    initialValue: '',
                  })(
                    <Input />
                  )}
                </FormItem>
                
                
                <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">新增</Button>
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
        
    }

};



// export default connect(mapStateToProps)(AssetMgmtQueryForm)
export default Form.create()(connect()(AssetMgmtAddForm));