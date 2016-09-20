/**
 * Created by leo on 2016/8/30.
 */

'use strict';

module.exports = function(app) {
  return new Handler(app);
};

class Handler {
  /**
   * Constructor.
   * @param app
   */
  constructor(app) {
    this.app = app;
  }

  /**
   * New client entry chat server.
   * @param  {Object}   msg     request message
   * @param  {Object}   session current session object
   * @param  {Function} next    next step callback
   * @return {Void}
   */
  login(msg, session, next) {
    const uid = msg.uid;
    const sessionService = this.app.get('sessionService');

    // verify user TODO

    // check duplicate log in
    if (!!sessionService.getByUid(uid)) {
      next(null, {
        error: 1,
      });
      return;
    }

    // set session
    session.bind(uid);

    // rsp
    next(null, {
      error: 0,
    });
  }
}
