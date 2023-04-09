'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async userlist() {
    const { ctx, service } = this;
    const result = await service.home.userlist()
    ctx.body = result
  }
}

module.exports = HomeController;
