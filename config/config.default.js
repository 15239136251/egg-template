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

  // add your mysql config
  // config.mysql = {
  //   // 单数据库信息配置
  //   client: {
  //     // IP
  //     host: '',
  //     // 端口号
  //     port: '',
  //     // 用户名
  //     user: '',
  //     // 密码
  //     password: '',
  //     // 数据库名
  //     database: '',
  //   },
  //   // 是否加载到 app 上，默认开启
  //   app: true,
  //   // 是否加载到 agent 上，默认关闭
  //   agent: false,
  // };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
