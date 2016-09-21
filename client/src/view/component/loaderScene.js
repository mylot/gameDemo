/**
 * Created by leo on 2016/8/2.
 */

'use strict';

const loaderTexture = require('../ui/loader');
const {preload} = require('../ui/resource');
const app = require('../../app');
const env = require('../../env');

module.exports = cc.Scene.extend({
  _label: null,
  _progressTimer: null,

  // _bgLayer: null,
  // _processLayer: null,
  // _processLayerLength: null,

  /**
   * @override
   */
  init() {
    this._super();

    // logo
    const winSize = cc.director.getWinSize();
    const centerPos = cc.p(winSize.width / 2, winSize.height / 2);

    // bg
    const bgImg = new Image();
    bgImg.src = loaderTexture;
    const bgTexture = new cc.Texture2D();
    bgTexture.initWithElement(bgImg);
    const bgSprite = cc.Sprite.createWithTexture(bgTexture);
    bgSprite.setPosition(centerPos);
    this.addChild(bgSprite, 0);

    // loading bar
    // const barSprite = new cc.Rect(centerPos.x, centerPos.y, winSize.width * 3 / 4, 30);
    // const ptSprite = cc.Sprite.create(res.Start_N_png);
    // ptSprite.setTextureRect(cc.rect(0, 0, winSize.width * 3 / 4, 30));
    // ptSprite.setColor(cc.color(255, 100, 100, 128));
    // this._progressTimer = cc.ProgressTimer.create(cc.Sprite.create(res.Start_N_png));
    // this._progressTimer.setPercentage(0.0);
    // this._progressTimer.setPosition(centerPos);
    // this.addChild(this._progressTimer, 10);

    // loading text
    this._label = cc.LabelTTF.create('Loading... 0%', 'Arial', 32);
    this._label.setColor(cc.color(0, 0, 0));
    this._label.setPosition(cc.pAdd(centerPos, cc.p(0, -50)));
    this.addChild(this._label, 10);
  },

  onEnter() {
    this._super();
    this.scheduleOnce(this._startLoading, 0.3);
  },

  onExit() {
    this._super();
  },

  _startLoading() {
    cc.loader.load(
      preload,
      {
        trigger: (result, count, loadedCount) => {
          const percent = loadedCount / count * 100;
          this._label.setString(`Loading... ${percent}%`);
        },
        triggerTarget: this,
        cb: () => app.instance().sendNotification(env.CMD.RUN_SCENE, {name: env.MVC.START_SCENE}),
      }
    );
  },
});