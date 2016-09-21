/**
 * Created by leo on 2016/9/20.
 */

'use strict';

const app = require('./app');
const env = require('./env');
const StartAppCommand = require('./controller/command/startAppCommand');

// main entrance
cc.game.onRealStart = function() {
  // start the first command
  app.instance().registerCommand(env.CMD.START_APP, StartAppCommand);
  app.instance().sendNotification(env.CMD.START_APP, {});
};