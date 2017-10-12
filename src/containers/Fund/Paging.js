import React from 'react';
import {Link} from 'react-router';


import { Row, Col, Button } from 'antd';


import QueryForm from '../../components/Fund/QueryForm';
import PagingTable from '../../components/Fund/PagingTable';


class Main extends React.Component {
    
    
    render() {
        
        return (
            <div className="Main">
                <Row>
                    <Col span={24}>
                        <Link to="/Fund/AddForm">
                            <Button type="primary" size="large"> 新建机构 </Button>
                        </Link>
                    </Col>
                </Row>
                
                
                <QueryForm />
                
                <PagingTable />
            </div>
        );
    }
}





export default Main;