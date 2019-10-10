import ShowHideController from './show_hide_controller';

// show/hide controller that also toggles a gradient reveal
export default class extends ShowHideController {
  public connect() {
    super.connect();
    $(this.containerTarget).on('shown.bs.collapse', () => {
      this.initMap();
    });
  }

  private initMap() {
    (window as any).WP.maps[this.index].initialize();
    (window as any).WP.maps[this.index].resize();
  }

  private get index() {
    return this.data.get('index') || '0';
  }
}
