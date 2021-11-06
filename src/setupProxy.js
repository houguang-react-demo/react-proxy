const {createProxyMiddleware:proxy} = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        proxy('/api1', {//请求前缀，带此前缀的请求会走此代理

            //请求转发的地址
            target: "http://localhost:5000",

            // 控制服务器收到的header中host字段值，
            // ture:值为服务器地址；false:值为客户端地址，
            // 建议设置为true，默认为false
            changeOrigin: true,

            //重写请求路径
            pathRewrite: {"^/api1": ""}
        })
    )
    app.use(
        proxy('/api2', {
            target: "http://localhost:5001",
            changeOrigin: true,
            pathRewrite: {"^/api2": ""}
        })
    )
}