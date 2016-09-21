/**
 * Created by leo on 2016/8/30.
 */

'use strict';

const dispatcher = require('../../../util/dispatcher');

module.exports = function(app) {
  return new Handler(app);
};

class Handler {
  /**
   * @param app
   * @constructor
   */
  constructor(app) {
    this.app = app;
  }

  /**
   * Gate handler that dispatch user to connectors.
   * @param {Object} msg message from client
   * @param {Object} session
   * @param {Function} next next step callback
   */
  queryEntry(msg, session, next) {
    // check input
    const uid = msg.uid;
    if (!uid) {
      next(null, {
        error: 1,
      });
      return;
    }

    // select connector
    const connectors = this.app.getServersByType('conn');
    if (!connectors || connectors.length === 0) {
      next(null, {
        error: 2,
      });
      return;
    }
    const res = dispatcher.dispatch(uid, connectors);

    // rsp
    next(null, {
      error: 0,
      host: res.host,
      port: res.clientPort,
    });
  }
}
