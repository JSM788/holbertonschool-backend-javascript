export default function createInt8TypedArray(len, position, value) {
  const arraybuf = new ArrayBuffer(len);
  const dataView = new DataView(arraybuf);
  dataView.setUint8(position, value);
  return dataView;
}
