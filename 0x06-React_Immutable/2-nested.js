export default function accessImmutableObject(object, array) {
  let value = object;

  for (const key of array) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      return undefined; // Return undefined if the path is invalid
    }
  }

  return value;
}
