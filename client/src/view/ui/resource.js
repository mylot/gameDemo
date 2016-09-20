/**
 * Created by leo on 2016/7/22.
 */

'use strict';

const all = [];
const res = {
  backgroundPng: 'res/background.png',
  startNPng: 'res/start_N.png',
  startSPng: 'res/start_S.png',
  sushiPng: 'res/sushi_1n/sushi_1n.png',
  sushiPlist: 'res/sushi.plist',
};

// generate all res for preload
for (const value of Object.values(res)) {
  all.push(value);
}

module.exports = {
  all,
  res,
};