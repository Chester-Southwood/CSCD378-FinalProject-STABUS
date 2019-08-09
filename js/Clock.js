function Clock() 
{
    this.todayDate = new Date();
    this.year = this.todayDate.getFullYear();
    this.hours = this.todayDate.getHours();
    this.minutes = this.todayDate.getMinutes();
    this.seconds = this.todayDate.getSeconds();
    this.dayNumber = this.todayDate.getDate();
    this.dayString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][this.todayDate.getDay()];
    this.monthString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][this.todayDate.getMonth()];

    Clock.prototype.run = function () {
        setInterval(this.update.bind(this), 1000);
    };

    Clock.prototype.update = function () {
        this.updateTime(1);
        document.getElementById("timebar").innerHTML = this.getTimeString();
    };

    Clock.prototype.updateTime = function (secs) {
        this.seconds += secs;
        if (this.seconds >= 60){
            this.minutes++;
            this.seconds = 0;
        }
        if (this.minutes >= 60){
            this.hours++;
            this.minutes = 0;
        }
        if (this.hours >= 24){
            this.hours = 0;
        }
    };

    Clock.prototype.getTimePeriod = function () {
        return this.hours > 12 ? "P.M." : "A.M.";
    }

    Clock.prototype.getTimeString = function () {
        let hour = this.hours;
        let minute = this.minutes;
        if (hour > 12) {
            hour -= 12;
        }
        if (minute < 10) {
            minute = `0${minute}`;
        }
        return `${hour}:${minute}`;
    }

    Clock.prototype.getOrdinalIndicator = function () {
        let ordinalIndicator;
        switch (this.dayNumber) {
            case 1:
                ordinalIndicator = "st";
                break;
            case 2:
                ordinalIndicator = "nd";
                break;
            case 3:
                ordinalIndicator = "rd";
                break;
            default:
                ordinalIndicator = "th";
                break;
        }
        return ordinalIndicator;
    }

    Clock.prototype.getTimeStringWithTimePeriod = function () {
        return `${this.getTimeString} ${this.getTimePeriod}`;
    }

    Clock.prototype.getDateString = function () {
        return `${this.monthString} ${this.dayNumber}${this.getOrdinalIndicator()} ${this.year}`;
    }

}

function proofOfConcept () {
    let clock = new Clock();
    clock.run();
    console.log(clock.dayString);
    console.log(`Time is -> ${clock.getTimeString()}`);
    console.log(`Time Period is -> ${clock.getTimePeriod()}`);
    console.log(`Day Word is -> ${clock.dayString}`);
    console.log(`Month Word is -> ${clock.monthString}`);
    console.log(`Day int is -> ${clock.dayNumber}`);
    console.log(`Ordinal Indicator is -> ${clock.getOrdinalIndicator()}`);
    console.log(`Year int is -> ${clock.year}`);
    console.log(clock.getDateString());
}

function main(){
    proofOfConcept();
}

$.ready(main());