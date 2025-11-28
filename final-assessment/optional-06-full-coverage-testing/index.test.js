import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Valid cases
test('sum returns correct result for positive numbers', () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(10, 20), 30);
});

// Non-number cases
test('sum returns 0 when a is not a number', () => {
  assert.strictEqual(sum('1', 2), 0);
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(undefined, 3), 0);
});

test('sum returns 0 when b is not a number', () => {
  assert.strictEqual(sum(1, '2'), 0);
  assert.strictEqual(sum(4, null), 0);
  assert.strictEqual(sum(6, undefined), 0);
});

// Negative number cases
test('sum returns 0 when a is negative', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(-10, 2), 0);
});

test('sum returns 0 when b is negative', () => {
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(2, -10), 0);
});

// Edge case: both invalid / negative
test('sum returns 0 when both arguments invalid or negative', () => {
  assert.strictEqual(sum('a', 'b'), 0);
  assert.strictEqual(sum(-5, -3), 0);
  assert.strictEqual(sum(-5, 'a'), 0);
});
