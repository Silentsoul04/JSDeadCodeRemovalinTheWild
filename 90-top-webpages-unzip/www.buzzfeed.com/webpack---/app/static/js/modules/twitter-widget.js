import { Application } from 't3js';
import util from '@buzzfeed/buzzblocks/js/services/util';

class TwitterWidget {
  init() {
    util.createScript('https://platform.twitter.com/widgets.js');
  }
}

Application.addModule('twitter-widget', ctx => new TwitterWidget(ctx));
