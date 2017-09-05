import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {Layout, Menu, Icon} from 'antd';
import MainHeader from '../../components/MainHeader';
import {fetchGet} from '../../api/fetch';
import './Home.scss';


const { Header, Content, Footer, Sider} = Layout;
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
       
        this.setState({
            username: '58管理员'
        })
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
                <Layout>
                    <Sider>
                        <div className="home-logo">Logo 信息管理后台</div>
                        
                        <Menu
                          defaultSelectedKeys={['1']}
                          defaultOpenKeys={['sub1']}
                          mode="inline"
                          theme="dark"
                          inlineCollapsed={this.state.collapsed}
                          onClick={ this.menuItemOnClick }
                        >
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <span>Option 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="inbox" />
                                <span>Option 3</span>
                            </Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                                <Menu.Item key="/general/list">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                  <Menu.Item key="11">Option 11</Menu.Item>
                                  <Menu.Item key="12">Option 12</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header>
                            
                        </Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
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