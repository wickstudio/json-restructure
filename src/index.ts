import { validateJson } from './utils/jsonValidator';
import { repairJson } from './utils/jsonRepair';
import { JsonParseError } from './types';

export function fixJson(jsonString: string): string {
  try {
    const repairedJson = repairJson(jsonString);
    if (validateJson(repairedJson)) {
      return repairedJson;
    } else {
      throw new JsonParseError('Invalid JSON after repair', 0, 0);
    }
  } catch (error) {
    if (error instanceof JsonParseError) {
      throw error;
    } else {
      throw new Error('Unable to fix JSON');
    }
  }
}

export { validateJson, repairJson };
