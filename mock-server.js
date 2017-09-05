const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

/*
 * PC
 * /
 */

server.post('/newpc/apartment/list', (req, res) => {

    res.send({
        "code": 0,
        "msg": "query apartments success",
        "data": {
            "dateList": [
                {
                    "logo": "http://sm01.alicdn.com/L1/272/6837/static/wap/img/index/v7/logo2.png",
                    "name": "公寓名称7",
                    "phone": "1833333333",
                    "min_price": 2000,
                    "max_price": 3000,
                    "weight": 10,
                    "create_time": "2017-06-05T06:41:51.511Z",
                    "status": 1,
                    "introduction": "公寓简介",
                    "price_description": "费用说明",
                    "advantage": "优势与服务",
                    "promotion_activity": "优惠活动",
                    "favourable_title": "",
                    "district": "热门小区",
                    "position": "热门板块",
                    "city": 10,
                    "classify": 2,
                    "service": [],
                    "tags": [1, 2],
                    "short_introduction": "一句话介绍",
                    "__v": 0,
                    "id": null
                },
                {
                    "logo": "http://sm01.alicdn.com/L1/272/6837/static/wap/img/index/v7/logo2.png",
                    "name": "公寓名称777777",
                    "phone": "1833333333",
                    "min_price": 2000,
                    "max_price": 3000,
                    "weight": 10,
                    "create_time": "2017-06-05T06:44:35.166Z",
                    "status": 1,
                    "introduction": "公寓简介",
                    "price_description": "费用说明",
                    "advantage": "优势与服务",
                    "promotion_activity": "优惠活动",
                    "favourable_title": "",
                    "district": "热门小区",
                    "position": "热门板块",
                    "city": 10,
                    "classify": 2,
                    "service": [],
                    "tags": [1, 2],
                    "short_introduction": "一句话介绍",
                    "__v": 0,
                    "id": null
                }
            ]
        }
    })

});

server.post('/newpc/apartment/recommend', (req, res) => {

    res.send({
        "code": 0,
        "msg": "query apartments success",
        "data": {
            "recommendList": [
                {
                    "logo": "http://sm01.alicdn.com/L1/272/6837/static/wap/img/index/v7/logo2.png",
                    "name": "公寓名称7",
                    "phone": "1833333333",
                    "min_price": 2000,
                    "max_price": 3000,
                    "weight": 10,
                    "create_time": "2017-06-05T06:41:51.511Z",
                    "status": 1,
                    "introduction": "公寓简介",
                    "price_description": "费用说明",
                    "advantage": "优势与服务",
                    "promotion_activity": "优惠活动",
                    "favourable_title": "",
                    "district": "热门小区",
                    "position": "热门板块",
                    "city": 10,
                    "classify": 2,
                    "service": [],
                    "tags": [
                        2
                    ],
                    "short_introduction": "一句话介绍",
                    "__v": 0,
                    "id": null
                },
                {
                    "logo": "http://sm01.alicdn.com/L1/272/6837/static/wap/img/index/v7/logo2.png",
                    "name": "公寓名称777777",
                    "phone": "1833333333",
                    "min_price": 2000,
                    "max_price": 3000,
                    "weight": 10,
                    "create_time": "2017-06-05T06:44:35.166Z",
                    "status": 1,
                    "introduction": "公寓简介",
                    "price_description": "费用说明",
                    "advantage": "优势与服务",
                    "promotion_activity": "优惠活动",
                    "favourable_title": "",
                    "district": "热门小区",
                    "position": "热门板块",
                    "city": 10,
                    "classify": 2,
                    "service": [],
                    "tags": [
                        2
                    ],
                    "short_introduction": "一句话介绍",
                    "__v": 0,
                    "id": null
                },
                {
                    "logo": "http://sm01.alicdn.com/L1/272/6837/static/wap/img/index/v7/logo2.png",
                    "name": "公寓名称7",
                    "phone": "1833333333",
                    "min_price": 2000,
                    "max_price": 3000,
                    "weight": 10,
                    "create_time": "2017-06-05T06:41:51.511Z",
                    "status": 1,
                    "introduction": "公寓简介",
                    "price_description": "费用说明",
                    "advantage": "优势与服务",
                    "promotion_activity": "优惠活动",
                    "favourable_title": "",
                    "district": "热门小区",
                    "position": "热门板块",
                    "city": 10,
                    "classify": 2,
                    "service": [],
                    "tags": [
                        2
                    ],
                    "short_introduction": "一句话介绍",
                    "__v": 0,
                    "id": null
                },
                {
                    "logo": "http://sm01.alicdn.com/L1/272/6837/static/wap/img/index/v7/logo2.png",
                    "name": "公寓名称7",
                    "phone": "1833333333",
                    "min_price": 2000,
                    "max_price": 3000,
                    "weight": 10,
                    "create_time": "2017-06-05T06:41:51.511Z",
                    "status": 1,
                    "introduction": "公寓简介",
                    "price_description": "费用说明",
                    "advantage": "优势与服务",
                    "promotion_activity": "优惠活动",
                    "favourable_title": "",
                    "district": "热门小区",
                    "position": "热门板块",
                    "city": 10,
                    "classify": 2,
                    "service": [],
                    "tags": [
                        2
                    ],
                    "short_introduction": "一句话介绍",
                    "__v": 0,
                    "id": null
                }
            ]
        }
    })

});

server.get('/getcity', (req, res) => {
    res.send({});
});
//公寓首页banner
server.get('/newpc/banner/list', (req, res) => {
    res.send({
        "code": 0,
        "msg": "query apartments success",
        "data": {
            "banner_list": [
                {
                    "id": "59366141a478050ee84cd03f",
                    "image": "./img/apartment-banner1.png",
                    "url": "http://yuefu.58.com/pc/index",
                    "city": "北京",
                    "sort": 1,
                    "type": 1,
                    "status": 1,
                    "create_time": "2017-05-27 00:00:00",
                    "option_time": "2017-05-27 00:00:00"

                }, {
                    "id": "59366141a478050ee84cd03f",
                    "image": "./img/cooperation-light.png",
                    "url": "http://yuefu.58.com/pc/index",
                    "city": "北京",
                    "sort": 1,
                    "type": 1,
                    "status": 1,
                    "create_time": "2017-05-27 00:00:00",
                    "option_time": "2017-05-27 00:00:00"
                }, {
                    "id": "59366141a478050ee84cd03f",
                    "image": "./img/apartment-banner2.png",
                    "url": "http://yuefu.58.com/pc/index",
                    "city": "北京",
                    "sort": 1,
                    "type": 1,
                    "status": 1,
                    "create_time": "2017-05-27 00:00:00",
                    "option_time": "2017-05-27 00:00:00"
                }
            ]
        }
    })

});
//合作申请form
server.post('/newpc/application/add', (req, res) => {
    console.log(req.body);
    res.send({
        "code": 0,
        "msg": '',
        "data": {}
    });
});
//意见与反馈
server.post('/newpc/opinion/add', (req, res) => {
    console.log(req.body);
    res.send({
        "code": 0,
        "msg": '',
        "data": {}
    });
});
//公寓推荐活动列表
server.get('/newpc/promotion/recommend', (req, res) => {

    res.send({
        "code" : 0,
        "msg" : "query apartments recommend success",
        "data" : {
            "promotion_list" : [{
                    "id" : "5950c67f714f92313d885317",
                    "description" : "年轻人的家",
                    "status" : 2,
                    "apartment" : {
                        "logo" : "http://pic1.58cdn.com.cn/nowater/yuefu/n_fdc0b003e9e2446a8b4a05ae80c02993.png",
                        "name" : "华夏管家",
                        "promotion_activity" : "续租客户可享受每月租金30-50元优惠，入住三天内提供免费上门维修服务。",
                        "favourable_title" : "续租客户可享受每月租金30-50元优惠",
                        "tags" : ["有优惠", "免中介费", "有WIFI", "维修服务"],
                        "short_introduction" : "年轻人的家",
                        "id" : "594b5c1a7c11f05d1c4be9ec"
                    }
                }, {
                    "id" : "5950c6fd87fd765487f3c80c",
                    "description" : "优质公寓，用心打造",
                    "status" : 2,
                    "apartment" : {
                        "logo" : "http://pic1.58cdn.com.cn/nowater/yuefu/n_bb6a171dc0e7460e9edb2e1139515efb.png",
                        "name" : "优租寓",
                        "promotion_activity" : "老拉新返现活动，我公司老客户介绍新客户成交一单，立即返现300元，已签合同为准。",
                        "favourable_title" : "应届生直降1200，老拉新立返300",
                        "tags" : ["有优惠", "免中介费", "维修服务", "环保装修"],
                        "short_introduction" : "优质公寓，用心打造",
                        "id" : "594b5ce52535fd5d3c50c217"
                    }
                }, {
                    "id" : "5950c720714f92313d885318",
                    "description" : "让租房不用烦，住哪不再难。",
                    "status" : 2,
                    "apartment" : {
                        "logo" : "http://pic1.58cdn.com.cn/nowater/yuefu/n_9f72b45af5444e65a583bd9e408189a5.png",
                        "name" : "孟邻白领公寓",
                        "promotion_activity" : "",
                        "favourable_title" : "暂无",
                        "tags" : ["有WIFI", "双周保洁", "智能门锁", "专属客服"],
                        "short_introduction" : "让租房不用烦，住哪不再难。",
                        "id" : "594b5f3e1d3d5b5d68aa11f9"
                    }
                }, {
                    "id" : "5950c75446be3f546778bf03",
                    "description" : "创造品质居住生活，记录青春美好回忆！",
                    "status" : 2,
                    "apartment" : {
                        "logo" : "http://pic1.58cdn.com.cn/nowater/yuefu/n_a130b1d473a941c189127997160c2aa8.jpg",
                        "name" : "快租",
                        "promotion_activity" : "17年应届毕业生房租立减158",
                        "favourable_title" : "17年应届毕业生房租立减158",
                        "tags" : ["有优惠", "双周保洁", "维修服务", "专属客服"],
                        "short_introduction" : "创造品质居住生活，记录青春美好回忆！",
                        "id" : "594b76421d3d5b5d68aa11fa"
                    }
                }
            ]
        }
    })

});


server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is running')
});