'use strict';

const { Service } = require('egg');

class UserService extends Service {
  // 登录
  async login(user) {
    const { app } = this;
    const result = {
      code: 101,
      msg: '登录失败!',
      data: null,
    };
    const data = await app.mysql.get('all_user', { username: user.username, password: user.password });
    console.log('🚀 ~ file: user.js:13 ~ UserService ~ login ~ data:', data);

    if (data) {
      /* 获取token */
      const token = app.jwt.sign({
        id: data.id,
        username: data.username,
        password: data.password,
        time: new Date().getTime(),
      }, app.config.jwt.secret);

      /* 修改状态码和返回信息 */
      result.code = 100;
      result.msg = '登录成功!';
      result.data = {
        data,
        token,
      };
    }
    // if (result)
    return result;
  }

  // 认证
  async auth() {
    const { ctx } = this;
    console.log('🚀 ~ file: user.js:38 ~ UserService ~ auth ~ ctx:', ctx);
    console.log('🚀 ~ file: user.js:38 ~ UserService ~ auth ~ ctx.state.user:', ctx.state.user);
    return ctx.state.user;
  }

  // 刷新token
  async refrestToken() {
    const { ctx, app } = this;

    const token = app.jwt.sign({
      ...ctx.state.user,
      time: new Date().getTime(),
    }, app.config.jwt.secret);

    return {
      code: 100,
      msg: '刷新成功！',
      data: {
        token,
      },
    };
  }
}

module.exports = UserService;
