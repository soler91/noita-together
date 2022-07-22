import { Envelope } from "./messages";

/**
 * @throws {Error} if the message is not a valid envelope
 */
export function decode(buf: Uint8Array): Envelope {
  const decoded = Envelope.fromBinary(buf);
  if (decoded === undefined) {
    throw new Error(
      "No message was decoded, buffer with length " +
        buf.byteLength +
        " was sent"
    );
  }
  return decoded;
}

export function encode(obj: Envelope) {
  try {
    const encoded = Envelope.toBinary(obj);
    return encoded;
  } catch (err) {
    console.log(`Something fked up encoding ${err}`);
  }
}

// TODO: Finish this
export function encodeGameMsg(type, data) {
  const payload = { gameAction: {} };
  payload.gameAction[type] = data;
  return encode(payload);
}

export function encodeLobbyMsg(type, data) {
  const payload = { lobbyAction: {} };
  payload.lobbyAction[type] = data;
  return encode(payload);
}

export default {
  encode,
  decode,
  encodeGameMsg,
  encodeLobbyMsg,
};
