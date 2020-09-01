
// 环境变量
const ENV = process.env.NODE_ENV;

/**
 * 项目启动配置
 * publicPath 项目根路径
 * host 本机host
 * port 本机端口
 * proxy webpack代理
 */
const config = {
  publicPath: '/h5-template/'
}

module.exports = {
  publicPath: config.publicPath
}


