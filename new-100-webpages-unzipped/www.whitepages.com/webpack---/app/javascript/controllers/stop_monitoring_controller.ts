import * as $ from 'jquery';
import ApplicationController from './application_controller';

export default class StopMonitoringController extends ApplicationController {
  public static targets = ['modal'];
  public modalTarget: Element;

  public async stop() {
    var response = await this.getJSON(
      '/monitoring/unmonitor?id=' + this.data.get('monitor-id')
    );
    if (response.status == '200') {
      var switchElement = <HTMLElement>(
        document.getElementById('monitor-switch')
      );
      switchElement.classList.remove('on');
      switchElement.dataset.ampevent = 'WPClickedMonitor';
      switchElement.dataset.target = 'switch.switchWrapper';
      switchElement.dataset.action = 'click->switch#toggle';
      delete switchElement.dataset.toggle;
      ($(this.modalTarget) as any).modal('hide');
    }
  }
}
