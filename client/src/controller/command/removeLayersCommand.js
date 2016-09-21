/**
 * Created by leo on 2016/9/12.
 */

'use strict';

const puremvc = require('puremvc');
const Context = require('../../model/context');

module.exports = class RemoveLayersCommand extends puremvc.SimpleCommand {
  /**
   * @override
   * @param notify
   */
  execute(notify: puremvc.Notification) {
    const callback = notify.getBody().callback;
    const context: Context = notify.getBody().context;

    // breadth first search
    const searched = [];
    context.walk();
    123;
    // const open = [context];
    // const close = [];
    // while (open.length) {
    //   // handle current
    //   const cur = open.shift();
    //   close.push(cur);
    //
    //   // handle current's children
    //   for (const ctx: Context of cur.children) {
    //     open.push(ctx);
    //   }
    // }

    // check root
    if (context.parent == null) {
      // do not remove root context
      close.shift();
    } else {
      context.parent.removeChild(context);
    }

    // remove context tree
    const promises = [];
    for (const ctx: Context of close) {
      promises.push(new Promise((resolve, reject) => {

      }));
    }

    // do callback
    if (!!callback) {
      callback();
    }
  }
};
