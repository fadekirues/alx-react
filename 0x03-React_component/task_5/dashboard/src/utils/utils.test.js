import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


test('getFullYear should return the current year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});


test('getFooterCopy should return the correct string based on the argument', () => {
  const trueResult = getFooterCopy(true);
  const falseResult = getFooterCopy(false);

  expect(trueResult).toBe('Holberton School');
  expect(falseResult).toBe('Holberton School main dashboard');
});


test('getLatestNotification should return the correct string', () => {
  const notification = getLatestNotification();
  const expectedNotification =
    '<strong>Urgent requirement</strong> - complete by EOD';

  expect(notification).toBe(expectedNotification);
});
