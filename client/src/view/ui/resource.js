/**
 * Created by leo on 2016/7/22.
 */

export const resArray = [];
export const res = {
  backgroundPng: 'res/background.png',
  startNPng: 'res/start_N.png',
  startSPng: 'res/start_S.png',
  sushiPng: 'res/sushi_1n/sushi_1n.png',
  sushiPlist: 'res/sushi.plist',
};

for (const value of Object.values(res)) {
  resArray.push(value);
}
