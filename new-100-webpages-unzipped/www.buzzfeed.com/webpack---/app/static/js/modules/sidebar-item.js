import {
    Application
} from 't3js';
import globalEvents from '@buzzfeed/buzzblocks/js/services/global-events';


class SidebarItem {
    constructor(context) {
        this.element = context.getElement();
    }

    init() {
        const idxInParent = Number(this.element.dataset.idxInParent);
        Application.broadcast(
            globalEvents.componentLoaded, {
                id: this.element.id,
                idxInParent
            }
        );
    }
}

Application.addModule('sidebar-item', (context) => new SidebarItem(context));