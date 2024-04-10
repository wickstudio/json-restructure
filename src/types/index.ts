export class JsonParseError extends Error {
  constructor(message: string, public lineNumber: number, public columnNumber: number) {
    super(message);
    this.name = 'JsonParseError';
  }
}