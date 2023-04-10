'use strict';

/* 定时任务 */
const { Subscription } = require('egg');

class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '10s', // 1 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const { ctx } = this;
    // const res = await ctx.curl('http://www.api.com/cache', {
    //     dataType: 'json',
    // });
    const res = {
      data: '定时任务',
    };
    ctx.app.cache = res.data;
    console.log('🚀 ~ file: update_cache.js:22 ~ UpdateCache ~ subscribe ~ ctx.app.cache:', ctx.app.cache);
  }
}

module.exports = UpdateCache;
