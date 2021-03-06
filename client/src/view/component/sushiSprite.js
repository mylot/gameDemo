/**
 * Created by leo on 2016/7/28.
 */

'use strict';

const app = require('../../app');
const env = require('../../env');

module.exports = cc.Sprite.extend({
  _disappearAction: null,
  _touchListener: null,

  /** @override */
  onEnter() {
    this._super();

    // create disappear action
    const frames = [];
    for (let i = 0; i < 10; i++) {
      const str = `sushi_1n_${i}.png`;
      const frame = cc.spriteFrameCache.getSpriteFrame(str);
      frames.push(frame);
    }
    this._disappearAction = new cc.Animate(new cc.Animation(frames, 0.02));
    this._disappearAction.retain();

    // add event listener
    this._touchListener = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: (touch, event) => {
        cc.log(`touched at ${JSON.stringify(touch.getLocation())}`);

        // check touch hit
        const target = event.getCurrentTarget();
        if (!cc.rectContainsPoint(target.getBoundingBox(), touch.getLocation())) {
          return false;
        }

        // unregiter event
        cc.eventManager.removeListener(this._touchListener);

        // play disappear
        target.stopAllActions();
        target.runAction(cc.sequence(
          this._disappearAction,
          cc.callFunc(target.removeFromParent, target)
        ));

        // add scroe
        app.instance().sendNotification(env.CMD.SUSHI_TOUCH, {});
        return true;
      },
    });
    cc.eventManager.addListener(this._touchListener, this);
  },

  /** @override */
  onExit() {
    this._disappearAction.release();
    this._super();
  },
});