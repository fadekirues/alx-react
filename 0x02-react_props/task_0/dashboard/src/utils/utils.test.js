// utils.test.js

import { getFullYear } from "./utils";

test("getFullYear returns the correct year", () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});
// utils.test.js

import { getFooterCopy } from './utils';

test('getFooterCopy returns the correct string for true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns the correct string for false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});
// utils.test.js

import { getLatestNotification } from './utils';

test('getLatestNotification returns the correct string', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete it by EOD'
  );
});
