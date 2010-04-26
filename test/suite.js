//--- scaffolding
load("lib/envjs/env.rhino.js");
load("lib/qunit/qunit.js")
load("lib/envjs/env.qunit.js");

//--- code under test
load("src/roughly.js");

//--- tests
load("test/test.js");
load("test/test.roughly.js");

//--- run the tests
location = "test/suite.html";
Envjs.wait();
