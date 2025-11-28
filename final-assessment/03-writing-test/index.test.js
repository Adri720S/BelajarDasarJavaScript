import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum should add two numbers correctly', () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(-1, 5), 4);
  assert.strictEqual(sum(10, 0), 10);
});
