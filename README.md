# JSON Restructure

[![GitHub license](https://img.shields.io/github/license/wickstudio/json-restructure.svg)](https://github.com/wickstudio/json-restructure/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/wickstudio/json-restructure.svg)](https://github.com/wickstudio/json-restructure/issues)
[![GitHub stars](https://img.shields.io/github/stars/wickstudio/json-restructure.svg)](https://github.com/wickstudio/json-restructure/stargazers)

JSON Restructure is a TypeScript library made by Wick Studio to help developers repair malformed JSON strings easily. It provides functions to fix, parse, validate, and repair JSON strings, making it simpler to work with JSON data in your projects.

## Features

- **Fix Malformed JSON** : JSON Restructure can fix JSON strings with syntax errors, such as missing or trailing commas, comments, etc.
- **Parse JSON** : It allows you to parse JSON strings and convert them into JavaScript objects.
- **Validate JSON** : You can validate JSON strings to check if they are well-formed.
- **Repair JSON** : JSON Restructure attempts to repair JSON strings that cannot be parsed due to syntax errors.

## Installation

To install JSON Restructure, you can use npm :

```bash
npm install json-restructure
```

## Usage

JSON Restructure provides several functions to handle JSON strings :

### Fixing Malformed JSON

```javascript
const { fixJson } = require('json-restructure');

const malformedJson = '{"name":"John","age":30,}//Trailing comma';
const fixedJson = fixJson(malformedJson);
console.log('Fixed JSON:', fixedJson);
```

### Parsing JSON

```javascript
const { parseJson } = require('json-restructure');

const jsonString = '{"name":"John","age":30}';
const parsedJson = parseJson(jsonString);
console.log('Parsed JSON:', parsedJson);
```

### Validating JSON

```javascript
const { validateJson } = require('json-restructure');

const jsonString = '{"name":"John","age":30}';
const isValid = validateJson(jsonString);
console.log('Is valid JSON?', isValid);
```

### Repairing Malformed JSON

```javascript
const { repairJson } = require('json-restructure');

const malformedJson = '{"name":"John","age":30,}//Trailing comma';
const repairedJson = repairJson(malformedJson);
console.log('Repaired JSON:', repairedJson);
```

### Full Usage

```javascript
// Import the functions from the library
const { fixJson, parseJson, validateJson, repairJson } = require('json-restructure');

// Example usage
const malformedJson = '{"name":"John","age":30,}//Trailing comma';
const fixedJson = fixJson(malformedJson);
console.log('Fixed JSON:', fixedJson);

// Parse JSON
try {
  const parsedJson = parseJson(fixedJson);
  console.log('Parsed JSON:', parsedJson);
} catch (error) {
  console.error('Error parsing JSON:', error.message);
}

// Validate JSON
const isValid = validateJson(fixedJson);
console.log('Is valid JSON?', isValid);

// Repair JSON
const repairedJson = repairJson(malformedJson);
console.log('Repaired JSON:', repairedJson);
```

## API Documentation

### `fixJson(jsonString: string): string`

Attempts to fix a malformed JSON string by removing comments and trailing commas.

### `parseJson(jsonString: string): any`

Parses a JSON string and returns the parsed JavaScript object.

### `validateJson(jsonString: string): boolean`

Checks if a JSON string is valid.

### `repairJson(jsonString: string): string`

Attempts to repair a malformed JSON string.

## Running Tests

To run the tests for JSON Restructure, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) before submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Issues and Feedback

If you encounter any issues or have any feedback, please don't hesitate to [open an issue](https://github.com/wickstudio/json-restructure/issues) on GitHub.

## Roadmap

- Add support for handling nested JSON structures.
- Implement additional options for customizing JSON repair behavior.
- Enhance error handling and provide more descriptive error messages.

## Acknowledgments

Special thanks to contributors who have helped improve this library.

## Contact

- Email: wick@wick-studio.com
- Website: https://wickdev.xyz
- Discord: https://discord.gg/wicks
- YouTube: https://www.youtube.com/@wick_studio