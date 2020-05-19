import {
  capitalize, reverse, calculator, cipher, analyze,
} from './functions';

test('capitalize hello to be equal Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('reverse hello to be equal olleh', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('Calculator sum 1 and 2 be equal to 3', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test('Calculator subs 1 and 2 be equal to 3', () => {
  expect(calculator.subs(1, 2)).toBe(-1);
});

test('Calculator mult 1 and 2 be equal to 3', () => {
  expect(calculator.mult(1, 2)).toBe(2);
});

test('Calculator div 1 and 2 be equal to 3', () => {
  expect(calculator.div(1, 2)).toBeCloseTo(0.5);
});

test('Cipher with key 1 encrypts Hello! to Ifmmp!', () => {
  expect(cipher('Hello!', 1)).toBe('Ifmmp!');
});

test('Cipher with key 5 encrypts Hello! to Mjqqt!', () => {
  expect(cipher('Hello!', 5)).toBe('Mjqqt!');
});

test('Cipher with key 1 encrypts Helloz! to Ifmmpa!', () => {
  expect(cipher('Helloz!', 1)).toBe('Ifmmpa!');
});

test('Analyze of [1, 2, 3] returns average 2', () => {
  expect(analyze([1, 2, 3]).average).toBe(2);
});

test('Analyze of [1, 2, 3] returns min 1', () => {
  expect(analyze([1, 2, 3]).min).toBe(1);
});

test('Analyze of [1, 2, 3] returns max 3', () => {
  expect(analyze([1, 2, 3]).max).toBe(3);
});

test('Analyze of [1, 2, 3] returns length 3', () => {
  expect(analyze([1, 2, 3]).length).toBe(3);
});