import { parseJson } from '../../src/utils/jsonParser';
import { JsonParseError } from '../../src/types';

describe('parseJson', () => {
  it('should parse a valid JSON string', () => {
    const validJson = '{"name":"John","age":30}';
    const result = parseJson(validJson);
    expect(result).toEqual({ name: 'John', age: 30 });
  });

  it('should throw a JsonParseError for invalid JSON', () => {
    const invalidJson = '{name:"John",age:30}';
    expect(() => parseJson(invalidJson)).toThrow(JsonParseError);
    try {
      parseJson(invalidJson);
    } catch (error) {
      if (error instanceof JsonParseError) {
        expect(error.lineNumber).toBe(1);
        expect(error.columnNumber).toBe(2);
      }
    }
  });

  it('should extract error details correctly', () => {
    const invalidJson = '{\n "name": "John",\n age: 30\n}';
    try {
      parseJson(invalidJson);
    } catch (error) {
      if (error instanceof JsonParseError) {
        expect(error.lineNumber).toBe(3);
        expect(error.columnNumber).toBe(2);
        expect(error.message).toBe("JsonParseError: Unexpected token 'a' in JSON at line 3, column 2 (line 3, column 2)");
      }
    }
  });
});