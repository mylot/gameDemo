/**
 * Created by leo on 2016/7/22.
 */

import {res} from '../ui/resource';
import {SushiSprite} from './sushiSprite';

const PlayLayer = cc.Layer.extend({
  sushiArray: null,
  scoreLabel: null,
  timeoutLabel: null,
  timeout: null,

  /** @override */
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
    this.scoreLabel = new cc.LabelTTF('score: 0', 'Arial', 38);
    this.scoreLabel.attr({
      x: size.width / 2 + 240,
      y: size.height - 30,
    });
    this.addChild(this.scoreLabel, 5);

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
    this.schedule(this.update, 1, cc.REPEAT_FOREVER, 1);

    return true;
  },

  update() {
    // add
    this.addSushi();

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

});

export const PlayScene = cc.Scene.extend({

  /** @override */
  onEnter() {
    this._super();
    const layer = new PlayLayer();
    this.addChild(layer);
  },
});