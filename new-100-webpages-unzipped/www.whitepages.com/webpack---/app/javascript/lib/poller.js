export default class Poller {
    constructor(div) {
        this.request = this.request.bind(this);
        this.div = div;
    }

    interval() {
        let left;

        return (left = $(this.div).data('interval')) != null ? left : 3000;
    }

    url() {
        return $(this.div).data('url');
    }

    start() {
        return (this.intervalId = setInterval(this.request, this.interval()));
    }

    request() {
        return $.ajax({
            url: this.url(),
            dataType: 'script'
        }).always(data => {
            if (data.status === 200) {
                return this.replace(data.responseText);
            }
        });
    }

    replace(responseText) {
        const partial = $(responseText);
        $(`#${$(this.div).attr('id')}`).html(partial);
        if (!partial.data('poll')) {
            return this.stop();
        }
    }

    stop() {
        return clearInterval(this.intervalId);
    }
}