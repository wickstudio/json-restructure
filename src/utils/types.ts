export class JsonParseError extends Error {
    lineNumber: number;
    columnNumber: number;
  
    constructor(message: string, lineNumber: number, columnNumber: number) {
      super(message);
      this.name = 'JsonParseError';
      this.lineNumber = lineNumber;
      this.columnNumber = columnNumber;
    }
  }