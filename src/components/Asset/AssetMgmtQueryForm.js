import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchGet} from '../../api/fetch';
import './AssetMgmtQueryForm.scss';


import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;



class AssetMgmtQueryForm extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            
        };
    }
    
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    
    
    componentDidMount () {
        
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
            <Form className="AssetMgmtQueryForm" onSubmit={this.handleSubmit}>
                
                <FormItem
                  {...formItemLayout}
                  label={(
                    <span>资产方编号&nbsp;</span>
                  )}
                  hasFeedback
                >
                  {getFieldDecorator('id', {
                    rules: [{ required: true, message: '请填写编号', whitespace: true }],
                    initialValue: 'aaaa'
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
                      { required: true, message: '请填写名称' },
                    ],
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
        loginUser: state.loginUser
    }

};



// export default connect(mapStateToProps)(AssetMgmtQueryForm)



export default Form.create()(AssetMgmtQueryForm);