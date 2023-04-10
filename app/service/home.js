const { Service } = require('egg');

class HomeService extends Service {
  async userlist() {
    const { app } = this;
    const result = await app.mysql.get('all_user');
    return result;
  }
}

module.exports = HomeService;
