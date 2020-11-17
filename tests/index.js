const test = require('tape');
const prettyError = require('../index');

test('timing test', function (t) {

    prettyError();
    t.plan(2);

    t.equal(typeof Date.now, 'function');
    var start = Date.now();

    setTimeout(function () {
        t.equal(Date.now() - start, 100);
    }, 100);
});