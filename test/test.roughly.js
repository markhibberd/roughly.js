module("roughly");

var subject = roughly;

test("whole numbers. ", function() {
    check_roughly("just happened", 0 * subject.seconds);
    check_roughly("1 second", 1 * subject.seconds);
});

function check_roughly(expected, duration) {
    var actual = subject.roughly(duration);
    same(actual, expected);
};


