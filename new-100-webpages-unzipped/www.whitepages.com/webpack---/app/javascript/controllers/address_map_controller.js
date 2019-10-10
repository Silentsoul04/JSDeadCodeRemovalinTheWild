import {
    Controller
} from 'stimulus';
import Map from '../lib/Map';

export default class extends Controller {
    static targets = ['neighborsList', 'mapView', 'mapButton', 'listButton'];

    connect() {
        this.mapViewTarget
            .querySelector('#location-map')
            .classList.remove('lazy-load');
    }

    showMap() {
        this.neighborsListTarget.classList.add('d-none');
        this.mapViewTarget.classList.remove('d-none');
        this.mapButtonTarget.classList.add('inactive');
        this.listButtonTarget.classList.remove('inactive');
        WP.maps['location-map'].resize();
    }

    showNeighbors() {
        this.neighborsListTarget.classList.remove('d-none');
        this.mapViewTarget.classList.add('d-none');
        this.mapButtonTarget.classList.remove('inactive');
        this.listButtonTarget.classList.add('inactive');
    }
}