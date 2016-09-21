/**
 * Created by leo on 2016/7/22.
 */

'use strict';

const {res} = require('../ui/resource');
const SushiSprite = require('./sushiSprite');
// const app = require('../../app');
const env = require('../../env');
const puremvc = require('puremvc');


const PlayLayer = cc.Layer.extend({
  sushiArray: null,
  score: 0,
  scoreLabel: null,
  timeoutLabel: null,
  timeout: null,

  ctor() {
    this._super();
    this.sushiArray = [];
    this.timeout = 60;

    // add bg
    const size = cc.winSize;
    this.bgSprite = new cc.Sprite(res.backgroundPng);
    this.bgSprite.attr({
      x: size.width / 2,
      y: size.height / 2,
      rotation: 180,
    });
    this.addChild(this.bgSprite, 0);

    // add score
    this.scoreLabel = new cc.LabelTTF('', 'Arial', 38);
    this.scoreLabel.attr({
      x: size.width / 2 + 240,
      y: size.height - 30,
    });
    this.addChild(this.scoreLabel, 5);
    this.updateScore(0);

    // add timeout
    this.timeoutLabel = new cc.LabelTTF(`${this.timeout}`, 'Arial', 38);
    this.timeoutLabel.attr({
      x: 50,
      y: size.height - 30,
    });
    this.addChild(this.timeoutLabel, 5);

    // load cache
    cc.spriteFrameCache.addSpriteFrames(res.sushiPlist);

    // add sushi schedule
    this.schedule(this.addSushi, 1, cc.REPEAT_FOREVER, 1);
    this.schedule(this.cleanSushi, 1, cc.REPEAT_FOREVER, 1);

    return true;
  },

  cleanSushi() {
    // clean
    for (let i = 0; i < this.sushiArray.length; i++) {
      if (this.sushiArray[i].y <= 0) {
        console.log('remove sushi');
        this.sushiArray[i].removeFromParent();
        this.sushiArray[i] = undefined;
        this.sushiArray.splice(i, 1);
        i--;
      }
    }
  },

  addSushi() {
    // add image
    const sushi = new SushiSprite(res.sushiPng);
    const size = cc.winSize;
    const x = sushi.width / 2 + size.width / 2 * cc.random0To1();
    sushi.attr({
      x,
      y: size.height - 30,
    });

    // animation
    const dropAction = cc.MoveTo.create(5, cc.p(sushi.x, -30));
    sushi.runAction(dropAction);

    // add
    this.sushiArray.push(sushi);
    this.addChild(sushi);
  },

  updateScore(score: number) {
    this.score = score;
    this.scoreLabel.setString(`score: ${this.score}`);
  },
});

module.exports = cc.Scene.extend({
  /** @override */
  init() {
    this._super();
    console.log('play scene init');
  },

  /** @override */
  cleanup() {
    this._super();
    console.log('play scene cleanup');
  },

  /** @override */
  onEnter() {
    this._super();
    const player = new PlayLayer();
    player.setTag(1);
    this.addChild(player);
  },

  listNotificationInterests() {
    return [
      env.CMD.SUSHI_TOUCH,
    ];
  },

  handleNotification(notify: puremvc.Notification) {
    const layer: PlayLayer = this.getChildByTag(1);
    layer.updateScore(layer.score + 1);
  },
});