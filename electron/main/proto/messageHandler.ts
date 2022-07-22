import { NT } from "./messages";
/**
 * @throws {Error} if the message is not a valid envelope
 */
export function decode(buf: Uint8Array): NT.IEnvelope {
  const decoded = NT.Envelope.decode(buf);
  return decoded;
}

export function encode(obj: NT.IEnvelope) {
  try {
    const error = NT.Envelope.verify(obj);
    if (error) {
      throw error;
    } else {
      const encoded = NT.Envelope.encode(obj).finish();
      return encoded;
    }
  } catch (err) {
    console.log(`Something fked up encoding ${err}`);
  }
}

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
