/**
 * Created by leo on 2016/8/1.
 */

'use strict';

const puremvc = require('puremvc');
const env = require('../../env');
const ConnectProxy = require('../../model/proxy/connectProxy');
const DirectorMediator = require('../../view/mediator/directorMediator');

module.exports = class StartAppCommand extends puremvc.SimpleCommand {
  /**
   * @override
   * @param notification
   */
  execute(notify: puremvc.Notification) {
    // register proxy
    // this.facade.registerProxy(new ConnectProxy());

    // register mediator
    this.facade.registerMediator(new DirectorMediator(env.MVC.DIRECTOR));

    // start first mediator
    this.facade.sendNotification(env.CMD.RUN_SCENE, {name: env.MVC.LOADER_SCENE});
  }

};