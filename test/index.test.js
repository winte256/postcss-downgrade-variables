const { getData, run } = require('./utils');

it('CHECK', () => run(getData('input'), getData('output')));
