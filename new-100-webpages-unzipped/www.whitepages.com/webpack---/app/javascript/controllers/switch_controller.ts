import * as $ from 'jquery';
import ApplicationController from './application_controller';

export default class SwitchController extends ApplicationController {
  public static targets = ['switchWrapper'];
  public switchWrapperTarget: Element;

  public async toggle() {
    if (!this.switchWrapperTarget.classList.contains('disabled')) {
      var response = await this.getJSON(
        '/monitoring/monitor?id=' +
          this.data.get('person-id') +
          '&name=' +
          this.data.get('person-name')
      );
      if (
        response.status == '200' ||
        response.error == 'AlreadyMonitoredException'
      ) {
        this.switchWrapperTarget.classList.add('on');
        ($('#monitoring-success') as any).modal({ backdrop: 'static' });
        ($('#monitoring-success') as any).modal('show');
        (document.getElementById('stop-monitoring') as any).setAttribute(
          'data-stop-monitoring-monitor-id',
          response.report_id
        );
        var switchElement = <HTMLElement>(
          document.getElementById('monitor-switch')
        );
        switchElement.dataset.ampevent = 'WPClickedUnmonitor';
        switchElement.dataset.toggle = 'modal';
        switchElement.dataset.target = '#stop-monitoring';
        delete switchElement.dataset.action;
      } else if (
        response.status == '409' &&
        response.error == 'ReportMonitorLimitExceededException'
      ) {
        ($('#limit-hit') as any).modal({ backdrop: 'static' });
        ($('#limit-hit') as any).modal('show');
      }
    }
  }
}
