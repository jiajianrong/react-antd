import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Layout, Menu, Icon} from 'antd';
import {fetchGet} from '../../api/fetch';
import './Home.scss';


const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;





class Home extends React.Component {
    
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
    
    
    
    componentDidMount() {
        
        console.log(this.props)
        
        const { dispatch } = this.props;
        //每次返回首页自动移动到顶部
        //window.scrollTo(0, windowScrollDistance);
        //打点统计数据
        //coreTrace.send('home');
        //拉取首页banner
        //dispatch(fetchHomeBanner('/newpc/banner/list', { type: 1 }));
        //拉取推荐公寓
        //dispatch(fetchRecommendList('/newpc/promotion/recommend', {type:1, count:4}));

    }
    
    
    
    menuItemOnClick = ({ item, key, keyPath }) => {
        
        console.log({ item, key, keyPath })
        this.props.router.push({
            pathname: key
        });
        
    };
    
    
    
    render() {
        
        const { number, issue, lotteryTime, headline } = this.state;
        const { cityList, homeRecommendList, homeBanner } = this.props;
        
        
        return (
            <div className="Home">
                home
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



export default connect(mapStateToProps)(Home)