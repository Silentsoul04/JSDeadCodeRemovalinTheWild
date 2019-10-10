import {
    Controller
} from 'stimulus';

export default class extends Controller {
    static targets = ['cell', 'previous', 'next'];

    connect() {
        this.showCol(this.startCol);
        this.nextTarget.classList.toggle('enabled');
    }

    next() {
        if (this.index + 1 == this.colToSkip) this.index = this.index + 2;
        else this.index++;

        this.showCol(this.index);

        if (this.index == this.numSlidingCols) {
            this.nextTarget.classList.toggle('enabled');
        }

        if (this.index == this.startCol + 1) {
            this.previousTarget.classList.toggle('enabled');
        }
    }

    previous() {
        if (this.index - 1 == this.colToSkip) this.index = this.index - 2;
        else this.index--;

        this.showCol(this.index);

        if (this.index == this.startCol) {
            this.previousTarget.classList.toggle('enabled');
        }

        if (this.index == this.numSlidingCols - 1) {
            this.nextTarget.classList.toggle('enabled');
        }
    }

    showCol(index) {
        this.index = index;
        this.cellTargets.forEach((el, i) => {
            el.classList.toggle('current', el.classList.contains(index));
        });
    }

    get startCol() {
        return parseInt(this.data.get('startCol'));
    }

    get numSlidingCols() {
        return parseInt(this.data.get('slidingCols'));
    }

    get colToSkip() {
        return parseInt(this.data.get('colToSkip'));
    }
}