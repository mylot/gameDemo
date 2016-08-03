/**
 * Created by leo on 2016/7/22.
 */

import {res} from '../ui/resource';

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
      () => {
        cc.log('Menu is clicked!');
        cc.director.runScene(new PlayScene());
      },
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

export const StartScene = cc.Scene.extend({

  /** @override */
  onEnter() {
    this._super();
    const layer = new StartLayer();
    this.addChild(layer);
  },
});
