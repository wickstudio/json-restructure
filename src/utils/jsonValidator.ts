export function validateJson(jsonString: string): boolean {
    try {
      JSON.parse(jsonString);
    } catch (error) {
      return false;
    }
    return true;
  }