var roughly = (function (self) {
    var seconds = 1000;
    var minutes = 60 * seconds;
    var hours = 60 * minutes;
    var days = 24 * hours;
    var weeks = 7 * days;
    var months = 30 * days;
    var years = 365 * days;
    
    function s(start, unit, message) {
        return {
            start: start,
            unit: unit, 
            message: message
        };
    }
    
    var slices = [
        s(0, seconds, "just happened"),
        s(1, seconds, "1 second"),
        s(2, seconds, "%d seconds"),
        s(40, seconds, "almost a minute"),
        s(1, minutes, "1 minute"),
        s(2, minutes, "%d minutes"),
        s(20, minutes, "half an hour"),
        s(40, minutes, "almost an hour"),
        s(1, hours, "1 hour"),
        s(2, hours, "%d hours"),
        s(4, hours, "half a day"),
        s(8, hours, "almost a day"),
        s(1, days, "1 day"),
        s(2, days, "%d days"),
        s(5, days, "almost a week"),
        s(1, weeks, "1 week"),
        s(2, weeks, "%d weeks"),
        s(4, weeks, "almost a month"),
        s(1, months, "1 month"),
        s(2, months, "%d months"),
        s(6, months, "half a year"),
        s(7, months, "over half a year"),
        s(9, months, "almost a year"),
        s(1, years, "1 year"),
        s(2, years, "%d years")
    ];
    
    function past(duration, slice) {
        var start = slice.start;
        var unit = slice.unit;
        var reference = start * unit;
        return reference > duration;
    }

    function findslice(duration) {
        var selected = slices[0];
        for (var i = 0; i < slices.length; ++i) {
            if (past(duration, slices[i])) {
                return selected;
            }
            selected = slices[i];
        }
        return selected;
    }
        
    function roughly(duration) {
        var slice = findslice(duration);
        var msg = slice.message;
        var unit = slice.unit;
        var value = parseInt(duration / unit, 10);
        return msg.replace(/%d/i, value);
    }

    self.seconds = seconds;
    self.minutes = minutes;
    self.hours = hours;
    self.days = days;
    self.weeks = weeks;
    self.months = months;
    self.years = years;

    self.roughly = roughly;

    return self;
}({}));