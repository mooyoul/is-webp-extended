const RIFF = new Uint8Array([
  0x52, 0x49, 0x46, 0x46,
]);

const WEBP = new Uint8Array([
  0x57, 0x45, 0x42, 0x50,
]);

const ANMF = new Uint8Array([
  0x41, 0x4e, 0x4d, 0x46,
]);

export async function isWebP(input: ArrayBuffer | Blob) {
  const chunk = await readBytes(input, 0, 12);
  const buf = new Uint8Array(chunk);

  return isEqual(RIFF, buf.slice(0, 4)) &&
    isEqual(WEBP, buf.slice(8, 12));
}

export async function isAnimatedWebP(input: ArrayBuffer | Blob) {
  if (await isWebP(input) === false) {
    return false;
  }

  let offset = 12;
  const size = getSize(input);

  do {
    const bufHeader = await readBytes(input, offset, 8);
    offset += 8;

    const chunkType = new Uint8Array(bufHeader.slice(0, 4));
    const [ payloadSize ] = new Uint32Array(bufHeader.slice(4, 8));
    offset += payloadSize;

    if (isEqual(ANMF, chunkType)) {
      return true;
    }
  } while (offset <= size);

  return false;
}

function readBytes(input: Blob | ArrayBuffer, offset: number, size: number): Promise<ArrayBuffer> {
  if (input instanceof Blob) {
    return new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = (e) => {
        reader.onerror = null;
        reader.onload = null;
        reject(e);
      };

      reader.onload = (e) => {
        reader.onerror = null;
        reader.onload = null;

        resolve(e.target!.result as ArrayBuffer);
      };

      reader.readAsArrayBuffer(
        input.slice(offset, offset + size),
      );
    });
  }

  return Promise.resolve(input.slice(offset, offset + size));
}

function getSize(input: Blob | ArrayBuffer) {
  return input instanceof Blob ?
    input.size :
    input.byteLength;
}

function isEqual(a: Uint8Array, b: Uint8Array) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }

  const maxLength = Math.max(a.byteLength, b.byteLength);
  for (let i = 0 ; i < maxLength ; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}
