export default function createInt8TypedArray (length, position, value) {
    let buffer = new ArrayBuffer(length);
    let dataview = new DataView(buffer);

    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }
    dataview.setInt8(position, value);

    return buffer;
}