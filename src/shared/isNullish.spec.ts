import { describe, it, expect } from '@jest/globals';
import { isNullish } from './isNullish';

describe('isNullish', () => {
    it('should return true for an object with only null or undefined values', () => {
        const nullishObject = { key1: null, key2: undefined, key3: null };
        expect(isNullish(nullishObject)).toBe(true);
    });

    it('should return false for an object containing non-nullish values', () => {
        const nonNullishObject = { key1: 'value1', key2: 0, key3: false };
        expect(isNullish(nonNullishObject)).toBe(false);
    });

    it('should return true for an array with only null or undefined values', () => {
        const nullishArray = [null, undefined, null];
        expect(isNullish(nullishArray)).toBe(true);
    });

    it('should return false for an array with at least one non-nullish value', () => {
        const nonNullishArray = ['item1', 0, false];
        expect(isNullish(nonNullishArray)).toBe(false);
    });

    it('should return false for an object containing an empty string', () => {
        const objWithEmptyString = { key1: '', key2: null };
        expect(isNullish(objWithEmptyString)).toBe(false);
    });

    it('should return true for an empty object', () => {
        expect(isNullish({})).toBe(true);
    });

    it('should return true for an empty array', () => {
        expect(isNullish([])).toBe(true);
    });

    it('should return false for a non-nullish primitive value', () => {
        expect(isNullish('string')).toBe(false);
        expect(isNullish(42)).toBe(false);
        expect(isNullish(true)).toBe(false);
    });

    it('should return true for a null or undefined value directly', () => {
        expect(isNullish(null)).toBe(true);
        expect(isNullish(undefined)).toBe(true);
    });
});
