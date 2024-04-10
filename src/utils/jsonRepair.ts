export function repairJson(jsonString: string): string {
  const commentRegex = /(?:\/\/.*|\/\*[\s\S]*?\*\/)/g;

  const jsonWithoutComments = jsonString.replace(commentRegex, '');

  const fixedJson = jsonWithoutComments.replace(/,\s*([\]}])/g, '$1');

  const fixedJsonWithBraces = addMissingBraces(fixedJson);

  return fixedJsonWithBraces;
}

function addMissingBraces(jsonString: string): string {
  let countOpenBraces = 0;
  let countOpenBrackets = 0;

  for (const char of jsonString) {
    if (char === '{') {
      countOpenBraces++;
    } else if (char === '[') {
      countOpenBrackets++;
    } else if (char === '}') {
      countOpenBraces--;
    } else if (char === ']') {
      countOpenBrackets--;
    }
  }

  let fixedJson = jsonString;
  for (let i = 0; i < countOpenBraces; i++) {
    fixedJson += '}';
  }

  for (let i = 0; i < countOpenBrackets; i++) {
    fixedJson += ']';
  }

  return fixedJson;
}
