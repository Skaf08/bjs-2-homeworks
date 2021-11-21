class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock (time,callback,id) {
        if(typeof id === 'undefined') throw new Error('error text');
        if (this.alarmCollection.find((arg) => id == arg.id) != undefined) {
            return console.error('same id');
        }
        this.alarmCollection.push({id, time, callback});     
    }

    removeClock(id) {
        let idx = this.alarmCollection.findIndex((arg) => id == arg.id);
        if (idx != -1) {
            this.alarmCollection.splice(idx,1);
            return true;
        }
        return false;
    }

    getCurrentFormattedTime() {
        function plusZero(numb) {
            if(numb > 10) {
                return numb;
            } else return '0' + numb;
        }
        let date = new Date(Date.now());
        return plusZero(date.getHours()) + ':' + plusZero(date.getMinutes());
    }

    start() {
        const checkClock = (call) => { 
            if(call.time == this.getCurrentFormattedTime()) {
                call.callback();
            }
        }
        if(this.timerid == null) {
            this.timerId = setInterval(() => {
                for (let i=0;i<this.alarmCollection.length;i++) {
                   checkClock(this.alarmCollection[i]);
                }
            }, 1000);
       }
    }

    stop() {
        if(this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(alarm => console.log(alarm.id + ': ' + alarm.time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock('07:55', () => console.log ('New day!'), 1);
phoneAlarm.addClock('08:00', () => console.log ('New day!!'), 2);
phoneAlarm.addClock('08:05', () => console.log ('New day!!!'), 3);
phoneAlarm.removeClock(2);
phoneAlarm.addClock('23:00', () => console.log ('Lets go sleep'), 4);
phoneAlarm.start();
phoneAlarm.stop();
phoneAlarm.printAlarms();
