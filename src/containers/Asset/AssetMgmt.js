import React from 'react';
import {Link} from 'react-router';


import { Row, Col, Button } from 'antd';


import AssetMgmtQueryForm from '../../components/Asset/AssetMgmtQueryForm';
import AssetMgmtTable from '../../components/Asset/AssetMgmtTable';


class AssetMgmt extends React.Component {
    
    
    render() {
        
        return (
            <div className="AssetMgmt">
                <Row>
                    <Col span={24}>
                        <Link to="/asset/assetMgmtAddForm">
                            <Button type="primary" size="large"> 新建机构 </Button>
                        </Link>
                    </Col>
                </Row>
                
                
                <AssetMgmtQueryForm />
                
                <AssetMgmtTable />
            </div>
        );
    }
}





export default AssetMgmt;