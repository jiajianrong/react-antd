import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {isEqual} from 'lodash';
import {fetchGet} from '../../api/fetch';



import { updateQuery, getAssets, getAsyncNames } from '../../actions/assetMgmt';


import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;




class AssetMgmtQueryForm extends React.Component {
    
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        let dispatch = this.props.dispatch;
        
        this.props.form.validateFieldsAndScroll((err, values) => {
            // 更新store
            !err && dispatch(updateQuery(values));
            // 请求table数据
            !err && dispatch(getAssets(values))
        });
    }
    
    
    
    componentDidMount() {
        if ( ! this.props.assetNames.length )
            this.props.dispatch(getAsyncNames());
    }
    
    
    /*componentWillReceiveProps(nextProps) {
        if ( isEqual( nextProps.assetsQueryForm, this.props.assetsQueryForm ) ) {
            return;
        }
        console.log('componentWillReceiveProps', nextProps.assetsQueryForm)
        //this.props.form.setFieldsValue(nextProps.assetsQueryForm);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;// !isEqual( nextProps.assetsQueryForm, this.props.assetsQueryForm )
    }*/
    
    
    
    render() {
        
        const assetsQueryForm = this.props.assetsQueryForm;
        const assetNames = this.props.assetNames;
        
        
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
            <Form className="AppComponent AssetMgmtQueryForm" onSubmit={this.handleSubmit}>
                
                <FormItem
                  {...formItemLayout}
                  label={(
                    <span>资产方编号&nbsp;</span>
                  )}
                  hasFeedback
                >
                  {getFieldDecorator('id', {
                    rules: [{ required: false, message: '请填写编号', whitespace: true }],
                    initialValue: assetsQueryForm.id,
                  })(
                    <Input />
                  )}
                </FormItem>
                
                
                <FormItem
                  {...formItemLayout}
                  label="资产方名称&nbsp;"
                  hasFeedback
                >
                  {getFieldDecorator('name', {
                    rules: [
                      { required: false, message: '请填写名称' },
                    ],
                    initialValue: assetsQueryForm.name,
                  })(
                    <Select placeholder="">
                      <Option value="名称1">名称1</Option>
                      <Option value="名称2">名称2</Option>
                    </Select>
                  )}
                </FormItem>
                
                
                <FormItem
                  {...formItemLayout}
                  label="测试异步数据&nbsp;"
                  hasFeedback
                >
                  {getFieldDecorator('asyncSelect', {
                    rules: [
                      { required: true, message: '请填写' },
                    ],
                    initialValue: assetsQueryForm.asyncSelect,
                  })(
                    <Select placeholder="">
                      {
                        assetNames.map( (item) => 
                          (<Option value={item.key} key={item.key}>{item.label}</Option>)
                        )
                      }
                    </Select>
                  )}
                </FormItem>
                
                
                <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">查询</Button>
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
        assetNames: state.assetNames,
        assetsQueryForm: state.assetsQueryForm,
    }

};



// export default connect(mapStateToProps)(AssetMgmtQueryForm)
export default Form.create()(connect(mapStateToProps)(AssetMgmtQueryForm));