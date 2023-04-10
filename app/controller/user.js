'use strict';

const { Controller } = require('egg');

class UserControll extends Controller {
  // 登录
  async login() {
    const { ctx, service } = this;
    const data = ctx.request.body;
    console.log('🚀 ~ file: user.js:8 ~ UserControll ~ login ~ data:', data);
    if (!data.username) {
      ctx.body = {
        code: 101,
        data: null,
        msg: '账号为空',
      };
      return;
    }
    const result = await service.user.login(data);
    ctx.body = result;
  }

  // 验证token，请求时再header里面配置 Authorization = `Bearer ${token}`
  // 特别注意：token不能直接发送，要在前面加上Bearer字符串和一个空格
  async index() {
    const { ctx, service } = this;
    const result = await service.user.auth();
    ctx.body = {
      code: 201,
      msg: '验证成功!',
      data: result,
    };
  }

  // 刷新token

}

module.exports = UserControll;
