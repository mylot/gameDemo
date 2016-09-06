/**
 * Created by leo on 2016/8/1.
 */

const puremvc = require('puremvc');
const {
  StartCommand,
} = require('./controller/command');

class AppFacade extends puremvc.Facade {
   /** @override */
  initializeController() {
    super.initializeController();
    this.registerCommand(AppFacade.START_APP, StartCommand);
  }

  /** @override */
  initializeModel() {
    super.initializeModel();
  }

  /** @override */
  initializeView() {
    super.initializeView();
  }

  start() {
    this.sendNotification(AppFacade.START_APP, {});
  }

  static getInstance(multitonKey) {
    const instanceMap = puremvc.Facade.instanceMap;
    if (!instanceMap[multitonKey]) {
      instanceMap[multitonKey] = new AppFacade(multitonKey);
    }
    return instanceMap[multitonKey];
  }
}

AppFacade.START_APP = 'StartApp';

module.exports = AppFacade;