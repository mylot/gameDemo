/**
 * Created by leo on 2016/8/30.
 */

'use strict';

const crc = require('crc');

module.exports.dispatch = function(uid, connectors) {
  const index = Math.abs(crc.crc32(uid)) % connectors.length;
  return connectors[index];
};