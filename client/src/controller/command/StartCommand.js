/**
 * Created by leo on 2016/8/1.
 */

import {puremvc} from 'puremvc';

export class StartCommand extends puremvc.SimpleCommand {
  /** @override */
  execute(notification) {
    cc.log('in start cmd');
    // register proxy
    // this.facade.registerProxy(new GameProxy() );

    // register mediator
    // this.facade.registerMediator(new DirectorMediator());
    // this.facade.registerMediator(new SceneMediator());
    // this.facade.registerMediator(new GameMediator());
  }
}