/**
 * Created by leo on 2016/8/1.
 */

const puremvc = require('puremvc');
const env = require('./env');
const StartAppCommand = require('./controller/command/startAppCommand');

class AppFacade extends puremvc.Facade {
  /**
   * Register commands.
   * @override
   */
  initializeController() {
    super.initializeController();
    this.registerCommand(env.CMD.START_APP, StartAppCommand);
  }

  /**
   * Stub
   * @override
   */
  initializeModel() {
    super.initializeModel();
  }

  /**
   * Stub
   * @override
   */
  initializeView() {
    super.initializeView();
  }

  /**
   *  Main entrance.
   */
  start() {
    this.sendNotification(env.CMD.START_APP, {});
  }

  /**
   * Return instance of facade.
   * @returns {Object}
   */
  static getInstance() {
    let instance = puremvc.Facade.instanceMap[env.APP.KEY];
    if (!instance) {
      instance = new AppFacade(env.APP.KEY);
    }
    return instance;
  }
}

// main entrance
cc.game.onRealStart = function() {
  AppFacade.getInstance().start();
};
