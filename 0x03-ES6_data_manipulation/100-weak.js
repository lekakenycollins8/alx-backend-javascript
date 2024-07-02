export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let count;
  if (weakMap.has(endpoint)) {
    count = weakMap.get(endpoint);
    count += 1;
  } else {
    count = 1;
  }
  weakMap.set(endpoint, count);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  return count;
}
