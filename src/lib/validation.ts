export function Validation(value: string, type: string): boolean {
  let re: RegExp;
  switch (type) {
    case "engineAmperage":
      re = /^\d*[1-9]\d*$/i;
      if (re.test(value)) {
        return true;
      }
      return false;
    case "force":
      re = /^\d*[1-9]\d*[.][0-9]+$/i;
      if (re.test(value)) {
        return true;
      }
      return false;
    case "speed":
      re = /^[0-9]*$/i;
      if (re.test(value)) {
        return true;
      }
      return false;
    default:
      return false;
  }
}
