import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {fetchGet} from '../../api/fetch';
import './General.scss';






class General extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            
        };
    }
    
    
    
    componentWillMount() {
        // this.props.dispatch(isShowFooter(true, 0));
        
        /*serverGet(
            API_CONFIG.mainHeadLine,
            '',
            (data) => {
                this.setState({headline: data.ret_result})
            }
        )*/
        
    }
    
    
    
    componentDidMount () {
        
    }
    
    
    
    render() {
        
        
        return (
            <div className="General">
               {this.props.children}
            </div>
        );
        // end return
    }
}


/**
 * react-redux的connect，通过 connect(select)(App) 连接 store 和 App 容器组件
 * mapStateToProps方法返回的对象，以及附带的dispatch方法会 以props的形式传递到container
 * 即，在container中可以
 * const { dispatch, homeRecommendList } = this.props;
 * 
 */
const mapStateToProps = (state/*store.getState*/, ownProps) => {

    return {
        homeRecommendList: state.homeRecommendList
    }

};



export default connect()(General)