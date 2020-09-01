const local = require('./../build/setting');

const host = local();
// 环境变量
const ENV = process.env.NODE_ENV;
const isNeedConsole = false; // 是否需要调试工具

/**
 * 项目启动配置
 * publicPath 项目根路径
 * host 本机host
 * port 本机端口
 * proxy webpack代理
 */
const config = {
  publicPath: '/new-project/',
  host: host || 'http://localhost',
  prot: 8080,
  proxyTarget: 'https://test.com'
}

module.exports = {
  publicPath: config.publicPath,
  host: config.host,
  port: config.prot,
  baseUrl: getBaseUrl().baseUrl,
  isNeedConsole
}



// 获取接口前缀地址
function getBaseUrl() {
    let baseUrl = ""; // 接口前缀
    switch(ENV) {
        // 开发环境
        case 'development':
            baseUrl =  '';
            // baseUrl =  'http://test.kaoshibao.tiaotukaoyan.com'; // 测试环境
            break;
        // 测试打包
        case 'test': 
            baseUrl =  'http://test.kaoshibao.tiaotukaoyan.com/';
            break;
        // 正式打包
        case 'production':
            baseUrl = 'https://kaoshibao.tiaotukaoyan.com/';
            break;
        default:
            baseUrl = '';
            baseCourseDetailsUrl = "";
            serverUrl = "";
            break;
    }
    return {
        baseUrl,
    };
}

