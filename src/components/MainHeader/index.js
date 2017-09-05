import React from 'react'
import { Row, Col, Button} from 'antd';
import {Layout} from 'antd';


import './index.scss'

const {Header} = Layout;



class MainHeader extends React.PureComponent {
    render() {
        
        const { info, onLoginOut } = this.props;
        
        return (
            <Header className="main-header">
                <Row>
                    <Col span={12}>
                        {/*<span className="logo" />*/}
                        <h2 className="logo-text">58金融信息管理后台</h2>
                    </Col>
                    <Col span={12}>
                        <p className="user-info">
                            <span className="info">你好, { info }</span>
                            <Button onClick={ onLoginOut } >退出</Button>
                        </p>
                    </Col>
                </Row>
                
                
            </Header>
        )
    }
}

MainHeader.propTypes = {
    info: React.PropTypes.string,
    onLoginOut: React.PropTypes.func
};

MainHeader.defaultProps = {
    info: '',
    onLoginOut: () => {}
};


export default MainHeader