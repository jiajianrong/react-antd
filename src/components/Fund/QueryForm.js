import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {isEqual} from 'lodash';
import {fetchGet} from '../../api/fetch';



import { updateQuery, getTable } from '../../actions/fund';


import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;




class QueryForm extends React.Component {
    
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        let dispatch = this.props.dispatch;
        
        this.props.form.validateFieldsAndScroll((err, values) => {
            // 更新store
            !err && dispatch(updateQuery(values));
            // 请求table数据
            // !err && dispatch(getTable(values))
        });
    }
    
    
    
    componentDidMount() {
        
    }
    
    
    
    render() {
        
        const queryForm = this.props.queryForm;
        
        
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
            <Form className="AppComponent" onSubmit={this.handleSubmit}>
                
                <FormItem
                  {...formItemLayout}
                  label={(
                    <span>资金方编号&nbsp;</span>
                  )}
                  hasFeedback
                >
                  {getFieldDecorator('id', {
                    rules: [{ required: false, message: '请填写编号', whitespace: true }],
                    initialValue: queryForm.id,
                  })(
                    <Input />
                  )}
                </FormItem>
                
                
                <FormItem
                  {...formItemLayout}
                  label="资金方名称&nbsp;"
                  hasFeedback
                >
                  {getFieldDecorator('name', {
                    rules: [
                      { required: false, message: '请填写名称' },
                    ],
                    initialValue: queryForm.name,
                  })(
                    <Select placeholder="">
                      <Option value="名称1">名称1</Option>
                      <Option value="名称2">名称2</Option>
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
        queryForm: state.fund_query_form,
    }

};



// export default connect(mapStateToProps)(QueryForm)
export default Form.create()(connect(mapStateToProps)(QueryForm));