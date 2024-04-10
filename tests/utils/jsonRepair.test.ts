import { repairJson } from '../../src/utils/jsonRepair';

describe('repairJson', () => {
  it('should repair and return a valid JSON string for malformed JSON with single-line comments', () => {
    const malformedJson = '{"name":"John","age":30,}//Trailing comma';
    const expectedJson = '{"name":"John","age":30}';
    const result = repairJson(malformedJson);
    expect(result).toBe(expectedJson);
  });

  it('should repair and return a valid JSON string for malformed JSON with multi-line comments', () => {
    const malformedJson = '{"name":"John","age":30,}/*Trailing comma*/';
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
