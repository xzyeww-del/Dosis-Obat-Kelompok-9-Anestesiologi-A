const assert = require('assert');
const dc = require('./nodeDoseCalc');

console.log('Running doseCalc unit tests...');

// percentToMgPerMl
assert.strictEqual(dc.percentToMgPerMl('2%'), 20);
assert.strictEqual(dc.percentToMgPerMl('0.5%'), 5);

// calculateMaxDoseMg
assert.strictEqual(dc.calculateMaxDoseMg(70, 4.5), 315);
assert.strictEqual(dc.calculateMaxDoseMg(0, 4.5), null);

// calculateMaxVolumeMl
assert.strictEqual(dc.calculateMaxVolumeMl(315, 10), 31.5);
assert.strictEqual(dc.calculateMaxVolumeMl(null, 10), null);

// calculateMgFromVolume
assert.strictEqual(dc.calculateMgFromVolume(10, 10), 100);
assert.strictEqual(dc.calculateMgFromVolume(0, 10), 0);

console.log('All tests passed.');
