/**
 * Created by leo on 2016/8/12.
 */

'use strict';

const puremvc = require('puremvc');
const pomelo = require('../../pomeloWrapper');

module.exports = class ConnectProxy extends puremvc.Proxy {
  /**
   * @override
   */
  onRegister() {
    const uid = 1000666;
    const key = 'test';

    // connect to gate
    pomelo.init({
      host: '127.0.0.1',
      port: 3014,
      log: true,
    })
    .then(() => {
      // query entry
      return pomelo.request('gate.default.queryEntry', {uid});
    })
    .then(rsp => {
      // check return
      if (!rsp || rsp.error !== 0) {
        return Promise.reject(`request queryEntry failed, ${JSON.stringify(rsp)}`);
      }

      // disconn
      pomelo.disconnect();

      // connect to conn
      const {host, port} = rsp;
      return pomelo.init({host, port, log: true});
    })
    .then(() => {
      // request login
      return pomelo.request('conn.default.login', {uid, key});
    })
    .then(rsp => {
      // check return
      if (!rsp || rsp.error !== 0) {
        return Promise.reject(`request login failed, ${JSON.stringify(rsp)}`);
      }

      // info
      cc.log('login success');
      return Promise.resolve();
    })
    .catch(errStr => {
      cc.log(`catch error, ${errStr}`);
    });
  }
};