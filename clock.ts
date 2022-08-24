export class Clock {
    constructor(private hour: number, private minute?: number) {
        this.hour = hour;
        this.minute = minute == undefined ? 0 : minute;
    }

    public toString(): string {
        this.calcClock(this.hour, this.minute!);
        return `${this.pad(this.hour)}:${this.pad(this.minute!)}`;
    }

    public plus(minutes: number) {
        this.minute = this.minute! + minutes;
        this.calcClock(this.hour, this.minute);
    }

    public minus(minutes: number) {
        this.minute = this.minute! - minutes;
        this.calcClock(this.hour, this.minute);
    }

    public equals(other: unknown): unknown {
        throw new Error('Remove this statement and implement this function');
    }

    calcClock(hour: number, minute: number) {

        this.hour = hour % 24;
        if (this.hour < 0) {
            this.hour = this.hour + 24;
        }

        if (minute > 0) {
            if (minute >= 60) {
                let extraHours = (minute / 60) | 0;
                this.hour = (this.hour + extraHours) % 24;

                if (this.hour < 0) {
                    this.hour = this.hour + 24;
                }

                this.minute = minute % 60;
            } else {
                this.minute = minute % 60;
            }
        } else {
            this.minute = minute % 60;
            if (this.minute < 0) {
                this.minute = this.minute + 60;
                this.hour = (((this.hour * 60 + (minute / 60 | 0)) / 60) % 24) | 0;
            }
        }
    }

    pad(num: number): string {
        let s = num + '';
        while (s.length < 2) s = '0' + s;
        return s;
    }
}

const clock = new Clock(1, -160);
console.log(clock.toString());
