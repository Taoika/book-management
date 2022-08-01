// 导入fs模块
let fs = require('fs');

// 导入http模块
const http = require('http');
const { resolve } = require('path');
const { resourceLimits } = require('worker_threads');

// 创建web服务器实例
const server = http.createServer();
// 为服务器实例绑定request事件，监听客户端的请求
server.on('request', function(req, res) {
    // 首页接口
    if (req.url === '/home' && req.method.toLowerCase() === 'post') {
        console.log('对方向register接口发送了post请求');
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        // console.log(req.url);
        let allData = ``;
        req.on('data', (chunk) => {
            console.log('数据开始传入');
            allData += chunk;
        });
        req.on('end', () => {
            return res.end(JSON.stringify({
                status:true,
                hot:[
                    {index:'001',cover:'https://img2.baidu.com/it/u=2985737912,2622490772&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=861',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'002',cover:'https://img0.baidu.com/it/u=4126171604,2495308197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'003',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'004',cover:'https://img1.baidu.com/it/u=1441206141,523134443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=707',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'005',cover:'https://img0.baidu.com/it/u=1874378165,1945234413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=708',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'}, 
                ],
                guess:[
                    {index:'001',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'002',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'003',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'004',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'005',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'006',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'007',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'008',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'009',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'010',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                ],
            }));
        });

    }
    // 分类接口
    if (req.url === '/sort' && req.method.toLowerCase() === 'post') {
        console.log('对方向register接口发送了post请求');
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        // console.log(req.url);
        let allData = ``;
        req.on('data', (chunk) => {
            console.log('数据开始传入');
            allData += chunk;
        });
        req.on('end', () => {
            console.log(allData);
            return res.end(JSON.stringify({
                status:true,
                message:[
                    {index:'001',cover:'https://img2.baidu.com/it/u=2985737912,2622490772&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=861',title:'五等分花嫁',point:'9.7',author:'你猜猜',tag:'都市言情'},
                    {index:'002',cover:'https://img0.baidu.com/it/u=4126171604,2495308197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'003',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'004',cover:'https://img1.baidu.com/it/u=1441206141,523134443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=707',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'005',cover:'https://img0.baidu.com/it/u=1874378165,1945234413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=708',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'}, 
                    {index:'006',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'007',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'008',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'009',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'010',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'011',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'012',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'013',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'014',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'015',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'016',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'017',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'018',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'019',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'020',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'021',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'022',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'023',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'024',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'025',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'026',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'027',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'028',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'029',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'030',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'031',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'032',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'033',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'034',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'035',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'036',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'037',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'038',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'039',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'040',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'041',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'042',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'043',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'044',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'045',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'046',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'047',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'048',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'049',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'050',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'051',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'052',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'053',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'054',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'055',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'056',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'057',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'058',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'059',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'060',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'061',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'062',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'063',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'064',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'065',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'066',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'067',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'068',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'069',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'070',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'071',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'072',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'073',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'074',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'075',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'076',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'077',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'078',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'079',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'080',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'081',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'082',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'083',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'084',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'085',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'086',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'087',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'088',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'089',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'090',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'091',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'092',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'093',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'094',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'095',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'096',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'097',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'098',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'099',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'100',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'101',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'102',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'103',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'104',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'105',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'106',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'107',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'108',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'109',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'110',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'111',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'112',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'113',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'114',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'115',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'116',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'117',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'118',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'119',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'120',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                ],
            }));
        });

    }
    // 搜索接口
    if (req.url === '/search' && req.method.toLowerCase() === 'post') {
        console.log('对方向register接口发送了post请求');
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        // console.log(req.url);
        let allData = ``;
        req.on('data', (chunk) => {
            console.log('数据开始传入');
            allData += chunk;
        });
        req.on('end', () => {
            console.log(allData);
            return res.end(JSON.stringify({
                status:true,
                message:[
                    {index:'001',cover:'https://img2.baidu.com/it/u=2985737912,2622490772&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=861',title:'五等分花嫁',point:'9.7',author:'你猜猜',tag:'都市言情'},
                    {index:'002',cover:'https://img0.baidu.com/it/u=4126171604,2495308197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'003',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'004',cover:'https://img1.baidu.com/it/u=1441206141,523134443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=707',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'005',cover:'https://img0.baidu.com/it/u=1874378165,1945234413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=708',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'}, 
                    {index:'006',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'007',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'008',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'009',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'010',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'011',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'012',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'013',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'014',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'015',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'016',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'017',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'018',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'019',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'020',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'021',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'022',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'023',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'024',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'025',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'026',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'027',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'028',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'029',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'030',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'031',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'032',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'033',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'034',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'035',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'036',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'037',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'038',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'039',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'040',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'041',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'042',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'043',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'044',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'045',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'046',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'047',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'048',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'049',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'050',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'051',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'052',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'053',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'054',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'055',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'056',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'057',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'058',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'059',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'060',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'061',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'062',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'063',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'064',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'065',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'066',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'067',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'068',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'069',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'070',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'071',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'072',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'073',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'074',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'075',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'076',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'077',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'078',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'079',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'080',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'081',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'082',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'083',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'084',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'085',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'086',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'087',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'088',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'089',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'090',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'091',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'092',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'093',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'094',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'095',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'096',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'097',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'098',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'099',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'100',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'101',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'102',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'103',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'104',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'105',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'106',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'107',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'108',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'109',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'110',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'111',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'112',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'113',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'114',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'115',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'116',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'117',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'118',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'119',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'120',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                ],
            }));
        });

    }
    // 搜索接口
    if (req.url === '/bookdetail' && req.method.toLowerCase() === 'post') {
        console.log('对方向bookdetail接口发送了get请求');
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        // console.log(req.url);
        let allData = ``;
        req.on('data', (chunk) => {
            console.log('数据开始传入');
            allData += chunk;
        });
        req.on('end', () => {
            console.log(allData);
            return res.end(JSON.stringify({
                status:true,
                message:{
                    book:{
                        index:1,
                        title:'三体',
                        cover:'https://img2.baidu.com/it/u=2985737912,2622490772&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=861',
                        author:'niyade',
                        translator:'wok',
                        publishHouse:'gdut',
                        publishTime:'2022-02-30',
                        authorInfo:'66666',
                        starCount:'666',
                        bookInfo:'毁灭吧，老子累了',
                        goodCount:'999',
                        readingCount:'333',
                        pointCount:'222',
                        tag:'言情',
                    },
                    message:{
                        praise:true,
                        Count:false
                    },
                },
            }));
        });

    }
    // 下载接口
    if (req.url === '/download' && req.method.toLowerCase() === 'get') {
        console.log('对方向register接口发送了post请求');
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        // console.log(req.url);
        let allData = ``;
        req.on('data', (chunk) => {
            console.log('数据开始传入');
            allData += chunk;
        });
        req.on('end', () => {
            console.log(allData);
            return res.end(JSON.stringify({
                status:true,
                message:[
                    {index:'001',cover:'https://img2.baidu.com/it/u=2985737912,2622490772&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=861',title:'五等分花嫁',point:'9.7',author:'你猜猜',tag:'都市言情'},
                    {index:'002',cover:'https://img0.baidu.com/it/u=4126171604,2495308197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'003',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'004',cover:'https://img1.baidu.com/it/u=1441206141,523134443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=707',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'005',cover:'https://img0.baidu.com/it/u=1874378165,1945234413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=708',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'}, 
                    {index:'006',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'007',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'008',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'009',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'010',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'011',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'012',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'013',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'014',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'015',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'016',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'017',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'018',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'019',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'020',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'021',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'022',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'023',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'024',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'025',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'026',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'027',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'028',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'029',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'030',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'031',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'032',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'033',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'034',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'035',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'036',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'037',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'038',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'039',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'040',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'041',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'042',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'043',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'044',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'045',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'046',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'047',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'048',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'049',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'050',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'051',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'052',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'053',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'054',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'055',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'056',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'057',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'058',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'059',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'060',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'061',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'062',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'063',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'064',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'065',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'066',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'067',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'068',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'069',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'070',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'071',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'072',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'073',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'074',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'075',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'076',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'077',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'078',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'079',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'080',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'081',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'082',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'083',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'084',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'085',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'086',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'087',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'088',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'089',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'090',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'091',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'092',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'093',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'094',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'095',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'096',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'097',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'098',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'099',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'100',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'101',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'102',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'103',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'104',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'105',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'106',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'107',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'108',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'109',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'110',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'111',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'112',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'113',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'114',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'115',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'116',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		            {index:'117',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'118',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'119',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                    {index:'120',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
                ],
            }));
        });

    }
    // 登录接口
    if (req.url === '/login' && req.method.toLowerCase() === 'post') {
        // 登录成功
        let success = {
            status: 0,
            message: '登录成功',
        };
        // 账号不存在
        let noAccount = {
            status: 1,
            message: '账户不存在',
        };
        // 密码错误
        let errorPassword = {
            status: 2,
            message: '密码错误',
        };
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');

        // 判断是否登录成功 0表示正常
        let flag = 0;
        let allData = ``;

        req.on('data', (chunk) => {
            allData += chunk;
        });
        req.on('end', () => {
            // 将字符串型数据转化为JSON对象
            allData = JSON.parse(allData);
            // 检测管理员数据库
            let userSql = 'select * from administrators';
            connection.query(userSql, [], (err, result) => {
                if (err) return console.log(err.message);
                else {
                    for (let i = 0; i < result.length; i++) {
                        if (result[i].idCard === allData.idCard) {
                            if (result[i].password === allData.password) {
                                // 登录成功
                                flag = 1;
                                // 生成token
                                jwt.sign({ idCard: allData.idCard },
                                    jwtKey, { expiresIn: '36000s' },
                                    (err, token) => {
                                        if (err) console.log(err.message);
                                        return res.end(JSON.stringify({
                                            idCard: allData.idCard,
                                            status: 3,
                                            message: '管理员账号登陆成功',
                                            token
                                        }));
                                    });
                                console.log('登录成功');
                            }
                            // 密码错误 
                            else {
                                console.log('密码错误');
                                flag = 1;
                                return res.end(JSON.stringify(errorPassword));
                            }
                        }
                    }
                }
            });
            // 检测普通用户数据库
            userSql = 'select * from users';
            connection.query(userSql, [], (err, result) => {
                if (err) return console.log(err.message);
                else {
                    for (let i = 0; i < result.length; i++) {
                        if (result[i].idCard === allData.idCard) {
                            if (result[i].password === allData.password) {
                                // 登录成功
                                flag = 1;
                                jwt.sign({ idCard: allData.idCard },
                                    jwtKey, { expiresIn: '3600s' },
                                    (err, token) => {
                                        if (err) console.log(err.message);
                                        return res.end(JSON.stringify({
                                            idCard: allData.idCard,
                                            status: 0,
                                            message: '账号登陆成功',
                                            token
                                        }));
                                    });
                                console.log('登录成功');
                            }
                            // 密码错误 
                            else {
                                console.log('密码错误');
                                flag = 1;
                                return res.end(JSON.stringify(errorPassword));
                            }
                        }
                    }
                    // 没有账号
                    if (flag === 0) {
                        console.log('没有账号');
                        return res.end(JSON.stringify(noAccount));
                    }
                }
            });
        });
    }
    // 请求已通过申请的专利信息 接口
    if (req.url === '/approved_patents' && req.method.toLocaleLowerCase() === 'post') {
        // 返回数据
        let error = {
            status: 1,
            message: '请求数据失败'
        };
        let success = {
            status: 0,
        };
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        // 接受信息
        let userSql = 'select * from approved_patents';
        connection.query(userSql, [], (err, result) => {
            if (err) return res.end(error);
            else {
                success.message = result;
                return res.end(JSON.stringify(success));
            }
        });
    }
    // 请求获取个人的所有信息 接口 包括个人数据 已通过专利 未审核专利 已驳回专利 未提交专利
    if (req.url === '/personal' && req.method.toLocaleLowerCase() === 'post') {
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        // 请求体接收
        let allData = '';
        req.on('data', (chunk) => {
            allData += chunk;
        });
        req.on('end', () => {
            allData = JSON.parse(allData);
            const token = allData.authorization;
            jwt.verify(token, jwtKey, (err, payload) => {
                if (err) return console.log(err.message);
                // 承载sql语句
                let userSql = ``;
                // 承载返回数据
                returnData = new Object();

                // 普通用户
                if (allData.user === 'users') {
                    // 获取个人资料 函数
                    function INFO(returnData) {
                        return new Promise((resolve, reject) => {
                            userSql = `select * from users where idCard=?`;
                            connection.query(userSql, [`${allData.idCard}`], (err, result) => {
                                if (err) return console.log(err.message);
                                else {
                                    resolve(result);
                                }
                            });
                        });
                    }
                    // 获取已通过专利 函数
                    function APPROVED(returnData) {
                        return new Promise((resolve, reject) => {
                            userSql = `select * from approved_patents where applicant=?`;
                            connection.query(userSql, [`${allData.idCard}`], (err, result) => {
                                if (err) return console.log(err.message);
                                else {
                                    resolve(result);
                                }
                            });
                        });
                    }
                    // 获取未审核专利信息 函数
                    function PENDING(returnData) {
                        return new Promise((resolve, reject) => {
                            userSql = `select * from pending_patents where applicant=? and status=0`;
                            connection.query(userSql, [`${allData.idCard}`], (err, result) => {
                                if (err) return console.log(err.message);
                                else {
                                    resolve(result);
                                }
                            });
                        });
                    }
                    // 获取已驳回的专利信息 函数
                    function REJECT(returnData) {
                        return new Promise((resolve, reject) => {
                            userSql = `select * from pending_patents where applicant=? and status=1`;
                            connection.query(userSql, [`${allData.idCard}`], (err, result) => {
                                if (err) return console.log(err.message);
                                else {
                                    resolve(result);
                                }
                            });
                        });
                    }
                    // 获取尚未提交的专利 函数
                    function EDITING(returnData) {
                        return new Promise((resolve, reject) => {
                            userSql = `select * from editing_patents where applicant=?`;
                            connection.query(userSql, [`${allData.idCard}`], (err, result) => {
                                if (err) return console.log(err.message);
                                else {
                                    resolve(result);
                                }
                            });
                        });
                    }
                    INFO(returnData).then((value) => {
                        returnData.info = value;
                        APPROVED(returnData).then((value) => {
                            returnData.approved = value;
                            PENDING(returnData).then((value) => {
                                returnData.pending = value;
                                REJECT(returnData).then((value) => {
                                    returnData.reject = value;
                                    EDITING(returnData).then((value) => {
                                        returnData.editing = value;
                                        return res.end(JSON.stringify(returnData));
                                    });
                                });
                            });
                        });
                    });
                }
                // 管理员
                if (allData.user === `administrators`) {
                    userSql = `select * from administrators where idCard=?`;
                    connection.query(userSql, [`${allData.idCard}`], (err, result) => {
                        if (err) return console.log(err.message);
                        else {
                            returnData.info = result;
                            console.log(returnData.info);
                            return res.end(JSON.stringify(returnData))
                        }
                    });
                }
            })
        });
    }
    // 请求获取所有未审核的专利信息 接口
    if (req.url === '/pending' && req.method.toLocaleLowerCase() === 'post') {
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        // 请求体接收
        let allData = '';
        req.on('data', (chunk) => {
            allData += chunk;
        });
        req.on('end', () => {
            allData = JSON.parse(allData);
            const token = allData.authorization;
            jwt.verify(token, jwtKey, (err, payload) => {
                if (err) return console.log(err.message);
                // 承载sql语句
                let userSql = ``;
                // 承载返回数据
                returnData = new Object();
                userSql = `select * from pending_patents where status=0`;
                connection.query(userSql, [], (err, result) => {
                    if (err) return console.log(err.message);
                    else {
                        returnData.pending = result;
                        // console.log(returnData.pending);
                        return res.end(JSON.stringify(returnData))
                    }
                });
            });
        });
    }
    // 请求申请专利
    if (req.url === '/apply' && req.method.toLocaleLowerCase() === 'post') {
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        // 请求体接收
        let allData = '';
        req.on('data', (chunk) => {
            allData += chunk;
        });
        req.on('end', () => {
            // allData = JSON.parse(allData);
            console.log(allData);
            const token = allData.authorization;
            // jwt.verify(token, jwtKey, (err, payload) => {
            //     if (err) return console.log(err.message);
            //     // 承载sql语句
            //     let userSql = ``;
            //     // 承载返回数据
            //     returnData = new Object();

            //     function insertPending() {
            //         return new Promise((resolve) => {
            //             let data = allData.apply;
            //             data.applicant = allData.idCard;
            //             // console.log(data);
            //             userSql = `insert into pending_patents set ?`;
            //             connection.query(userSql, data, (err, result) => {
            //                 if (err) return console.log(err.message);
            //                 else {
            //                     resolve(true);
            //                 }
            //             });
            //         });
            //     }

            //     function selectInventor(idCard) {
            //         return new Promise((resolve) => {
            //             // console.log(idCard);
            //             let flag = 0;
            //             let data = allData.inventor;
            //             userSql = `select idCard from inventor`;
            //             connection.query(userSql, [], (err, result) => {
            //                 if (err) return console.log(err.message);
            //                 for (let i = 0; i < result.length; i++) {
            //                     // console.log(result[i].idCard);
            //                     // 该发明人信息已存在
            //                     if (idCard === result[i].idCard) {
            //                         // console.log(result[i].idCard);
            //                         resolve(true);
            //                         flag = 1;
            //                     }
            //                 }
            //                 // 该发明人信息不存在
            //                 if (flag === 0) {
            //                     // console.log('进来了');
            //                     resolve(false);
            //                 }
            //             });
            //         });

            //     }
            //     insertPending().then((value) => {
            //         selectInventor(allData.inventor.idCard).then((value) => {
            //             // console.log(value);
            //             if (!value) {
            //                 // console.log('进来了2');
            //                 let data = allData.inventor;
            //                 userSql = `insert into inventor set ?`;
            //                 connection.query(userSql, data, (err, result) => {
            //                     if (err) return console.log(err.message);
            //                     // console.log('success');
            //                     res.end(JSON.stringify({
            //                         status: 1,
            //                         message: '申请提交成功！！！',
            //                     }));
            //                 });
            //             } else {
            //                 res.end(JSON.stringify({
            //                     status: 1,
            //                     message: '申请提交成功！！！',
            //                 }));
            //             }
            //         });
            //     });
            // });
        });
    }
    // 专利申请通过 接口
    if (req.url === '/approve' && req.method.toLocaleLowerCase() === 'post') {
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        // 请求体接收
        let allData = '';
        req.on('data', (chunk) => {
            allData += chunk;
        });
        req.on('end', () => {
            allData = JSON.parse(allData);
            // console.log(allData);
            const token = allData.authorization;
            jwt.verify(token, jwtKey, (err, payload) => {
                if (err) return console.log(err.message);
                // 承载sql语句
                let userSql = ``;
                let flag = 0;
                // 承载返回数据
                userSql = `select * from pending_patents where id=?`;
                // 数据插入
                connection.query(userSql, [allData.id], (err, result) => {
                    if (err) {
                        flag = 1;
                        return console.log(err.message);
                    }
                    // console.log(result.name);
                    let patent = {
                        name: result[0].name,
                        introduce: result[0].introduce,
                        image1: result[0].image1,
                        image2: result[0].image2,
                        image3: result[0].image3,
                        type: result[0].type,
                        label: result[0].label,
                        applicant: result[0].applicant,
                        inventor: result[0].inventor,
                    };
                    // console.log(result[0].name);
                    //将数据加入到approve库
                    userSql = `insert into approved_patents set ?`;
                    connection.query(userSql, patent, (err, result) => {
                        if (err) {
                            flag = 1;
                            return console.log(err.message);
                        }
                        console.log('添加成功');
                    });
                    // 将pending库的数据删除
                    userSql = `delete from pending_patents where id=?`
                    connection.query(userSql, [result[0].id], (err, result) => {
                        if (err) {
                            flag = 1;
                            return console.log(err.message);
                        }
                        console.log('删除成功');
                    });
                    if (flag === 0) return res.end(JSON.stringify({
                        status: 0,
                        message: '专利成功申请'
                    }));
                });
            });
        });
    }
    // 专利申请驳回 接口
    if (req.url === '/reject' && req.method.toLocaleLowerCase() === 'post') {
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        // 请求体接收
        let allData = '';
        req.on('data', (chunk) => {
            allData += chunk;
        });
        req.on('end', () => {
            allData = JSON.parse(allData);
            const token = allData.authorization;
            jwt.verify(token, jwtKey, (err, payload) => {
                if (err) return console.log(err.message);
                // 承载sql语句
                let userSql = ``;
                // 承载返回数据
                returnData = new Object();
                userSql = `update pending_patents set status=1 where id=?`
                connection.query(userSql, [allData.id], (err, result) => {
                    if (err) return console.log(err.message);
                    return console.log('success');
                });
            });
        });
    }
    // 用户发送反馈信息 接口
    if (req.url === '/feedback' && req.method.toLocaleLowerCase() === 'post') {
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        // 请求体接收
        let allData = '';
        req.on('data', (chunk) => {
            allData += chunk;
        });
        req.on('end', () => {
            allData = JSON.parse(allData);
            const token = allData.authorization;
            jwt.verify(token, jwtKey, (err, payload) => {
                if (err) return console.log(err.message);
                // 承载sql语句
                let userSql = ``;
                // 承载返回数据
                returnData = new Object();
                // 重新整理数据
                let data = {
                    idCard: allData.idCard,
                    text: allData.text,
                    result: ``,
                };
                userSql = `insert into feedback set ?`;
                connection.query(userSql, data, (err, result) => {
                    if (err) return console.log(err.message);
                    if (result.affectedRows === 1) {
                        res.end(JSON.stringify({
                            message: '成功反馈信息',
                            status: 0,
                        }));
                    }
                });
            });
        });
    }
    // 用户发送举报信息 接口
    if (req.url === '/report' && req.method.toLocaleLowerCase() === 'post') {
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        // 请求体接收
        let allData = '';
        req.on('data', (chunk) => {
            allData += chunk;
        });
        req.on('end', () => {
            allData = JSON.parse(allData);
            const token = allData.authorization;
            jwt.verify(token, jwtKey, (err, payload) => {
                if (err) return console.log(err.message);
                // 承载sql语句
                let userSql = ``;
                // 承载返回数据
                returnData = new Object();
                // 重新整理数据
                let data = {
                    idCard: allData.idCard,
                    reportID: allData.reportID,
                    text: allData.text,
                    result: ``,
                };
                userSql = `insert into report set ?`;
                connection.query(userSql, data, (err, result) => {
                    if (err) return console.log(err.message);
                    if (result.affectedRows === 1) {
                        res.end(JSON.stringify({
                            message: '成功向管理员进行举报',
                            status: 0,
                        }));
                    }
                });
            });
        });
    }
    // 获取所有举报 反馈信息
    if (req.url === '/getFeedbackAndReport' && req.method.toLocaleLowerCase() === 'post') {
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        // 请求体接收
        let allData = '';
        req.on('data', (chunk) => {
            allData += chunk;
        });
        req.on('end', () => {
            allData = JSON.parse(allData);
            const token = allData.authorization;
            jwt.verify(token, jwtKey, (err, payload) => {
                if (err) return console.log(err.message);
                // 承载sql语句
                let userSql = ``;
                // 承载返回数据
                returnData = new Object();

                // 管理员查看权限
                if (allData.user === 'administrators') {
                    // 获取反馈信息 函数
                    function FEEDBACK(returnData) {
                        return new Promise((resolve, reject) => {
                            userSql = `select * from feedback where status=0`;
                            connection.query(userSql, [], (err, result) => {
                                if (err) return console.log(err.message);
                                else {
                                    resolve(result);
                                }
                            });
                        });
                    }
                    // 获取举报信息 函数
                    function REPORT(returnData) {
                        return new Promise((resolve, reject) => {
                            userSql = `select * from report where status=0`;
                            connection.query(userSql, [], (err, result) => {
                                if (err) return console.log(err.message);
                                else {
                                    resolve(result);
                                }
                            });
                        });
                    }
                    FEEDBACK(returnData).then((value) => {
                        returnData.feedback = value;
                        REPORT(returnData).then((value) => {
                            returnData.report = value;
                            return res.end(JSON.stringify(returnData));
                        });
                    });
                }
            })
        });
    }
    // 试验端口
    if (req.url === '/try' && req.method.toLocaleLowerCase() === 'post') {
        console.log(req.headers);
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        const database = { idCard: '440785200301301617', password: 'admin123' };
        let allData = ``;
        req.on('data', (chunk) => {
            allData += chunk;
        });
        req.on('end', () => {
            allData = JSON.parse(allData);
            // console.log(allData);
            const { idCard, password } = allData;
            if (idCard === database.idCard && password === database.password) {
                // console.log('登陆成功');
                jwt.sign({ idCard },
                    jwtKey, { expiresIn: '3600s' },
                    (err, token) => {
                        if (err) console.log(err.message);
                        res.end(JSON.stringify({ idCard, message: '登陆成功', token }));
                    }
                );
            }
        });
    }
    // 试验登录成功端口
    if (req.url === '/loginSuccess') {
        // 设置跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Method', '*');
        res.setHeader('Access-Control-Expose-Headers', 'authorization');

        let allData = '';
        req.on('data', (chunk) => {
            allData += chunk;
        });
        req.on('end', () => {
            allData = JSON.parse(allData);
            const token = allData.authorization;
            jwt.verify(token, jwtKey, (err, payload) => {
                if (err) return console.log(err.message);
                res.end(JSON.stringify({ message: '认证成功', payload }));
            })
        });
    }

});
// 启动服务器
server.listen(8000, function() {
    console.log('8000端口监听中');
});