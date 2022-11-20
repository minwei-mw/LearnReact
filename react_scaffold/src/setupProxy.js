const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api',{
            target:"https://stock.tuchong.com",
            changeOrigin:true,
            // pathRewrite:{'^/api':''},
            // secure:true //https应该为true
        })
    )
}