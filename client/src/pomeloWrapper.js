/**
 * Created by leo on 2016/8/30.
 */

require('pomelo-cocos2d-js');

// this is a pomelo wrapper for promise-like api
const pomelo = window.pomelo;
const pomeloWrapper = Object.setPrototypeOf({}, window.pomelo);

pomeloWrapper.init = (params) => new Promise((resolve, reject) => pomelo.init(params, resolve));

pomeloWrapper.request = (route, msg) => new Promise((resolve, reject) => pomelo.request(route, msg, resolve));

pomeloWrapper.notify = (route, params) => new Promise((resolve, reject) => pomelo.notify(route, params));

pomeloWrapper.on = (route) => new Promise((resolve, reject) => pomelo.on(route, resolve));

module.exports = pomeloWrapper;