BROWSER = firefox3
RHINO = java -jar lib/rhino/js.jar -opt -1
LINT = lib/lint/jslint.js
GEN = gen
SRC = src/roughly.js 
TEST = test/suite.js
REPORT = test/suite.html
COMBINED = ${GEN}/roughly.all.js

default: lint test

test: .PHONY
	${RHINO} ${TEST}

${COMBINED}: ${SRC} ${GEN}
	cat ${SRC} > $@

lint: ${COMBINED}
	${RHINO} ${LINT} $>

report:
	${BROWSER} ${REPORT}

repl: ${COMBINED}
	${RHINO} -f $> -f -

size: 
	find src -name "*.js" | xargs wc | sort -n

${GEN}:
	mkdir -p $@

clean:
	rm -rf ${GEN}; find . -name "*~" -print0 | xargs -0 rm
