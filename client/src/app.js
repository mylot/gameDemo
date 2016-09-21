/**
 * Created by leo on 2016/8/1.
 */

const puremvc = require('puremvc');
const env = require('./env');

module.exports = class AppFacade extends puremvc.Facade {
  /**
   * Return instance of facade.
   * @returns {Object}
   */
  static instance() {
    let instance = puremvc.Facade.instanceMap[env.APP.KEY];
    if (!instance) {
      instance = new AppFacade(env.APP.KEY);
    }
    return instance;
  }
};