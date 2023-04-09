/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1680587205819_3487';

  // add your middleware config here
  config.middleware = [];

  config.cluster = {
    listen: {
      path: '',
      port: 8008,
      hostname: '0.0.0.0'
    }
  };

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

  // 添加jwt
  config.jwt = {
    secret: '123456'
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 允许访问接口的白名单
    domainWhiteList: [ 'http://localhost:8080' ],
  };

  // 跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
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
