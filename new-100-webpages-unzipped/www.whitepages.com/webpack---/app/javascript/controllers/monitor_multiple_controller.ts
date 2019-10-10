import ApplicationController from './application_controller';

export default class MonitorMultipleController extends ApplicationController {
  public static targets = ['person'];

  public personTargets: HTMLElement[];

  public monitor_relatives() {
    const filtered_relatives: HTMLElement[] = this.filter_relatives();

    filtered_relatives.forEach(person => {
      this.getJSON(
        `/monitoring/monitor?id=${person.dataset['personId']}&name=${person.dataset['personName']}`
      );
    });
  }

  private filter_relatives() {
    return this.personTargets.filter(person => {
      return (
        !(person.querySelector('.checked-box') as any).classList.contains(
          'hide'
        ) && person.dataset['personId'] != ''
      );
    });
  }
}
