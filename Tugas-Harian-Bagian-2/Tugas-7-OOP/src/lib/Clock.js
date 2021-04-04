export class Clock {
    constructor ({template}) {
        this.timer = 0;
        this.template = template;
    }

    render() {
        const date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    start () {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }

    stop () {
        clearInterval(this.timer);
    }
}