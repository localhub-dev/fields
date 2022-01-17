import { lowerCase, upperFirst, snakeCase } from 'lodash-es';
import { v4 as uuidv4 } from 'uuid';

export default {
  toSentenceCase,
  toSnakeCase,
  getRandomId
};

/**
 * Converts string to sentence case.
 * @param {string} string String to convert
 * @returns {string} String in sentence case
 * @example
 * // returns 'I am a sentence case string'
 * toSentenceCase('i am a SENTENCE CASE string.')
 */
export function toSentenceCase (string) {
  return upperFirst(lowerCase(string));
}

/**
 * Converts string to lower snake case.
 * @param {string} string String to convert
 * @returns {string} String in snake case
 * @example
 * // returns 'i_am_a_snake_case_string'
 * toSnakeCase('I am a SNAKE CASE string.')
 */
export function toSnakeCase (string) {
  return snakeCase(string);
};

/**
 * Create a new UUID (v4).
 */
export function generateRandomId () {
  return uuidv4();
}
