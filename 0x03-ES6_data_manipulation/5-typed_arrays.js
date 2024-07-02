export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8 = new Int8Array(buffer, 0, length);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  int8.set([value], position);

  return new DataView(buffer);
}
