/**
 * Created by leo on 2016/9/13.
 */

'use strict';

const puremvc = require('puremvc');
const env = require('../../env');
const SceneMediator = require('./sceneMediator');

module.exports = class DirectorMediator extends puremvc.Mediator {
  /**
   * Constructor.
   */
  constructor(name: string) {
    super(name, null);
  }

  /**
   * @override
   */
  onRegister() {
    // If referenced loading.js, please remove it
    if (!cc.sys.isNative && document.getElementById('cocosLoading')) {
      document.body.removeChild(document.getElementById('cocosLoading'));
    }

    // Pass true to enable retina display, on Android disabled by default to improve performance
    cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS);

    // Adjust viewport meta
    cc.view.adjustViewPort(true);

    // Uncomment the following line to set a fixed orientation for your game
    cc.view.setOrientation(cc.ORIENTATION_PORTRAIT);

    // Setup the resolution policy and design resolution size
    cc.view.setDesignResolutionSize(640, 960, cc.ResolutionPolicy.SHOW_ALL);

    // The game will be resized when browser size change
    cc.view.resizeWithBrowserSize(true);
  }

  /**
   * @override
   * @returns {*[]}
   */
  listNotificationInterests() {
    return [
      env.CMD.RUN_SCENE,
      env.CMD.PUSH_SCENE,
      env.CMD.POP_SCENE,
    ];
  }

  /**
   * @override
   * @param notify
   */
  handleNotification(notify: puremvc.Notification) {
    switch (notify.getName()) {
      case env.CMD.RUN_SCENE:
        this.handleRunScene(notify);
        break;

      case env.CMD.PUSH_SCENE:
        break;

      case env.CMD.POP_SCENE:
        break;

      default:
        console.error(`unknow type ${notify}`);
    }
  }

  /**
   * Handle run scene.
   * @param notify
   */
  handleRunScene(notify: puremvc.Notification) {
    // check existance
    const sceneName: string = notify.getBody().name;
    if (this.facade.hasMediator(sceneName)) {
      console.error(`scene already exist, ${JSON.stringify(notify)}`);
      return;
    }

    // register new mediator
    const scene = new SceneMediator(sceneName);
    this.facade.registerMediator(scene);

    // remove current mediator
    const current = cc.director.getRunningScene();
    if (!!current) {
      const mediator: puremvc.Mediator = current.getMediator();
      this.facade.removeMediator(mediator.mediatorName);
    }

    // run scene
    cc.director.runScene(scene.getViewComponent());
  }
};