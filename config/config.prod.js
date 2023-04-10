'use strict';
console.log('prod');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
    const config = exports = {};
    
    // add your mysql config
    config.mysql = {
        // 单数据库信息配置
        client: {
            // IP
            host: '1.116.143.16',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: 'quhaibin',
            // 数据库名
            database: 'all_system',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};