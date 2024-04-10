import { JsonParseError } from '../types';

export function parseJson(jsonString: string): any {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      const { message, lineNumber, columnNumber } = extractErrorDetails(error, jsonString);
      const errorMessage = `JsonParseError: ${message} (line ${lineNumber}, column ${columnNumber})`;
      const jsonParseError = new JsonParseError(errorMessage, lineNumber, columnNumber);
      throw jsonParseError;
    }
    throw error;
  }
}

function extractErrorDetails(error: SyntaxError, jsonString: string): { message: string; lineNumber: number; columnNumber: number; } {
  const match = /^Unexpected token (.) in JSON at position (\d+)/.exec(error.message);
  if (match) {
    const [, unexpectedToken, position] = match;
    const lineNumber = jsonString.slice(0, +position).split('\n').length;
    const previousLinesLength = jsonString.slice(0, +position).lastIndexOf('\n') + 1;
    const columnNumber = +position - previousLinesLength + 1;
    return {
      message: `Unexpected token '${unexpectedToken}' in JSON at line ${lineNumber}, column ${columnNumber}`,
      lineNumber,
      columnNumber,
    };
  }
  return { message: error.message, lineNumber: -1, columnNumber: -1 };
}