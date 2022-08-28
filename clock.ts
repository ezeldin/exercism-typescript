export class Clock {
    constructor(private hour: number, private minute?: number) {
        this.hour = hour;
        this.minute = minute == undefined ? 0 : minute;
    }

    public toString(): string {
        let clocK = this.calcClock(this.hour, this.minute!);
        return `${this.pad(clocK.hour)}:${this.pad(clocK.minute!)}`;
    }

    public plus(minutes: number) {
        this.minute = this.minute! + minutes;
        this.calcClock(this.hour, this.minute);
        return new Clock(this.hour, this.minute)
    }

    public minus(minutes: number) {
        this.minute = this.minute! - minutes;
        this.calcClock(this.hour, this.minute);
        return new Clock(this.hour, this.minute)
    }

    public equals(newClock: Clock): boolean {
        let clocK1 = this.calcClock(this.hour, this.minute!);
        let clocK2 = this.calcClock(newClock.hour, newClock.minute!);

        if (clocK1.hour == clocK2.hour && clocK1.minute == clocK2.minute) {
            return true;
        }
        else {
            return false;
        }
    }

    calcClock(hour: number, minute: number): Clock {
        this.hour = hour % 24;
        if (this.hour < 0) {
            this.hour = this.hour + 24;
        }

        if (minute >= 0) {
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
            let minutes = minute % 60;
            console.log('remaining Minutes:', minutes);
            this.minute = minutes + 60;

            let subHours = this.minute < 60 ? (((minute / 60) | 0) - 1) % 24 : (((minute / 60) | 0) + 1) % 24;
            console.log('subHours:', subHours);

            let hours = this.hour + subHours;
            if (hours < 0) {
                this.hour = hours + 24
            }
            else {
                this.hour = hours;
            }
        }

        return new Clock(this.hour, this.minute);
    }

    pad(num: number): string {
        let s = num + '';
        while (s.length < 2) s = '0' + s;
        return s;
    }
}

const clock = new Clock(10, 0).plus(3).toString();
console.log(clock.toString());
