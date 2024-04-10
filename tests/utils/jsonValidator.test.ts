import { validateJson } from '../../src/utils/jsonValidator';

describe('validateJson', () => {
  it('should return true for valid JSON', () => {
    const validJson = '{"name":"John","age":30}';
    const result = validateJson(validJson);
    expect(result).toBe(true);
  });

  it('should return true for a valid JSON array', () => {
    const validJsonArray = '[1, 2, 3, "hello", true, null]';
    const result = validateJson(validJsonArray);
    expect(result).toBe(true);
  });

  it('should return false for invalid JSON with missing quotes around keys', () => {
    const invalidJson = '{name:"John",age:30}';
    const result = validateJson(invalidJson);
    expect(result).toBe(false);
  });

  it('should return false for invalid JSON with a trailing comma', () => {
    const invalidJson = '{"name":"John","age":30,}';
    const result = validateJson(invalidJson);
    expect(result).toBe(false);
  });

  it('should return false for invalid JSON with mismatched brackets', () => {
    const invalidJson = '{"name":"John","age":30}]';
    const result = validateJson(invalidJson);
    expect(result).toBe(false);
  });

  it('should return false for an empty string', () => {
    const emptyString = '';
    const result = validateJson(emptyString);
    expect(result).toBe(false);
  });
});