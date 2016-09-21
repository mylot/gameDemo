/**
 * Created by leo on 2016/9/20.
 */

'use strict';

const puremvc = require('puremvc');
const env = require('../../env');
const LoaderScene = require('../component/loaderScene');
const StartScene = require('../component/startScene');
const PlayScene = require('../component/playScene');

module.exports = class SceneMediator extends puremvc.Mediator {
  /**
   * Constructor.
   * @param scene
   */
  constructor(name: string) {
    // decide which scene to create
    let scene;
    switch (name) {
      case env.MVC.LOADER_SCENE: scene = new LoaderScene(); break;
      case env.MVC.START_SCENE: scene = new StartScene(); break;
      case env.MVC.PLAY_SCENE: scene = new PlayScene(); break;
      default:
        console.error(`invalid scene name, ${name}`);
    }

    // init
    super(name, scene);

    // register mediator in scene
    scene.getMediator = () => this;
  }

  /**
   * @override
   */
  onRegister() {
    const scene: cc.Scene = this.getViewComponent();
    scene.init();
    scene.retain();
  }

  /**
   * @override
   */
  onRemove() {
    const scene: cc.Scene = this.getViewComponent();
    scene.release();
  }

  /**
   * @override
   * @returns {*[]}
   */
  listNotificationInterests() {
    // add component's interests
    const scene: cc.Scene = this.getViewComponent();
    const interests = [];
    if (typeof scene.listNotificationInterests === 'function') {
      interests.push(...scene.listNotificationInterests());
    }

    return interests;
  }

  /**
   * @override
   * @param notify
   */
  handleNotification(notify: puremvc.Notification) {
    // check component has handle function
    const scene: cc.Scene = this.getViewComponent();
    if (typeof scene.handleNotification !== 'function') {
      console.error(`scene do not have handleNotification, ${scene.getName()}, ${JSON.stringify(notify)}`);
      return;
    }

    scene.handleNotification(notify);
  }
};