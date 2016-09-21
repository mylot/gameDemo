/**
 * Created by leo on 2016/7/22.
 */

'use strict';

const {res} = require('../ui/resource');
const app = require('../../app');
const env = require('../../env');

const StartLayer = cc.Layer.extend({

  /** @override */
  ctor() {
    this._super();
    const size = cc.winSize;

    // add bg
    this.bgSprite = new cc.Sprite(res.backgroundPng);
    this.bgSprite.attr({
      x: size.width / 2,
      y: size.height / 2,
    });
    this.addChild(this.bgSprite, 0);

    // add start menu
    const startItem = new cc.MenuItemImage(
      res.startNPng,
      res.startSPng,
      () => app.instance().sendNotification(env.CMD.RUN_SCENE, {name: env.MVC.PLAY_SCENE}),
      this
    );
    startItem.attr({
      x: size.width / 2,
      y: size.height / 2,
      anchorX: 0.5,
      anchorY: 0.5,
    });
    const menu = new cc.Menu(startItem);
    menu.attr({
      x: 0,
      y: 0,
    });
    this.addChild(menu, 1);

    return true;
  },
});

module.exports = cc.Scene.extend({
  /** @override */
  init() {
    this._super();
    console.log('start scene init');
  },

  /** @override */
  cleanup() {
    this._super();
    console.log('start scene cleanup');
  },

  /** @override */
  onEnter() {
    this._super();
    const layer = new StartLayer();
    this.addChild(layer);
  },
});