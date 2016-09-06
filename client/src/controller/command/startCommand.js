/**
 * Created by leo on 2016/8/1.
 */

const puremvc = require('puremvc');
const ConnectProxy = require('../../model/proxy/connectProxy');

module.exports = class StartCommand extends puremvc.SimpleCommand {
  /** @override */
  execute(notification) {
    // register proxy
    this.facade.registerProxy(new ConnectProxy());

    // register mediator
    // this.facade.registerMediator(new DirectorMediator());
    // this.facade.registerMediator(new SceneMediator());
    // this.facade.registerMediator(new GameMediator());
  }
};