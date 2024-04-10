import { fixJson, repairJson } from '../src/index';
import { JsonParseError } from '../src/types';

describe('fixJson', () => {
  it('should return the original string for valid JSON', () => {
    const validJson = '{"name":"John","age":30}';
    const result = fixJson(validJson);
    expect(result).toBe(validJson);
  });

  it('should repair and return a valid JSON string for malformed JSON', () => {
    const malformedJson = '{"name":"John","age":30,}//Trailing comma';
    const expectedJson = '{"name":"John","age":30}';
    const result = fixJson(malformedJson);
    expect(result).toBe(expectedJson);
  });

  it('should throw a JsonParseError for invalid JSON that cannot be repaired', () => {
    const invalidJson = '{name:"John",age:30}';
    expect(() => fixJson(invalidJson)).toThrowError(JsonParseError);
  });
});

describe('repairJson', () => {
  it('should repair and return a valid JSON string for malformed JSON with trailing commas and comments', () => {
    const malformedJson = '{"name":"John","age":30,}//Trailing comma';
    const expectedJson = '{"name":"John","age":30}';
    const result = repairJson(malformedJson);
    expect(result).toBe(expectedJson);
  });

  it('should return the original string for valid JSON', () => {
    const validJson = '{"name":"John","age":30}';
    const result = repairJson(validJson);
    expect(result).toBe(validJson);
  });
});
