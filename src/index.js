import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/index';

import {IndexRedirect, Route, Router, hashHistory, IndexRoute, Redirect} from 'react-router';

import App from './containers/App';


import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));


/*
 * https://github.com/ReactTraining/react-router/issues/2144#issuecomment-150939358
 * router scrollY
 */
hashHistory.listen(location => {
    // Use setTimeout to make sure this runs after React Router's own listener
    setTimeout(() => {
        // Keep default behavior of restoring scroll position when user:
        // - clicked back button
        // - clicked on a link that programmatically calls `history.goBack()`
        // - manually changed the URL in the address bar (here we might want
        // to scroll to top, but we can't differentiate it from the others)
        if (location.action === 'POP') {
            return;
        }
        // In all other cases, scroll to top
        window.scrollTo(0, 0);
    });
});



ReactDOM.render(

    <Provider store={store}>

        <Router history={hashHistory}>

            <Route path="/" component={App}>
        
                <IndexRedirect to="home" />
                
                
                
                {/* 首页 */}
                <Route path="home" getComponent={(location, callback)=>{
                    require.ensure([], function (require) {
                        callback(null, require('./containers/Home/Home').default)
                    }, 'Home')
                }} />
                
                
                
                {/* 业务概况 */}
                <Route path="general" getComponent={(location, callback)=>{
                    require.ensure([], function (require) {
                        callback(null, require('./containers/General/General').default)
                    }, 'General') 
                }}>
                    
                    <IndexRedirect to="list"/>
                    
                    <Route path="list" getComponent={(location, callback)=>{
                        require.ensure([], function (require) {
                            callback(null, require('./containers/General/List').default)
                        }, 'GeneralList')
                    }} />
                    
                </Route>
                
                
                
                {/* 资产方 */}
                <Route path="asset" getComponent={(location, callback)=>{
                    require.ensure([], function (require) {
                        callback(null, require('./containers/Asset/Asset').default)
                    }, 'Asset') 
                }}>
                    
                    <IndexRedirect to="assetMgmt"/>
                    
                    <Route path="assetMgmt" getComponent={(location, callback)=>{
                        require.ensure([], function (require) {
                            callback(null, require('./containers/Asset/AssetMgmt').default)
                        }, 'AssetMgmt')
                    }} />
                    
                    <Route path="assetMgmtAddForm" getComponent={(location, callback)=>{
                        require.ensure([], function (require) {
                            callback(null, require('./containers/Asset/AssetMgmtAddForm').default)
                        }, 'AssetMgmtAddForm')
                    }} />
                    
                </Route>
                
            </Route>
            
            
            
            <Redirect from="*" to="/home" />
            
        </Router>

    </Provider>,

    document.getElementById('root')

)







registerServiceWorker();
