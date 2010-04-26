
function check_exception(fn, name) {
    try {
        fn();
        throw "TestPassed";
    } catch (e) {
        if (e === "TestPassed") {
            ok(false, "Expected failure, but it succeeded.");
        } else if (name) {
            same(e.name, name);
        } else {
            ok(true, "Exception expected, and was thrown");
        }
    }
}
