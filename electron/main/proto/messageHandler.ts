import path from "path";
import protobuf from "protobufjs";
import { publicFolder } from "../root-path";

const root = protobuf.loadSync(path.join(publicFolder, "./messages.proto"));
const proto = root.lookupType("Envelope");

export function decode(buf) {
  try {
    const decoded = proto.decode(buf);
    const error = proto.verify(decoded);
    if (error) {
      throw error;
    } else {
      return decoded;
    }
  } catch (err) {
    console.log(`Something fked up decoding ${err}`);
  }
}

export function encode(obj) {
  try {
    const error = proto.verify(obj);
    if (error) {
      throw error;
    } else {
      const encoded = proto.encode(obj).finish();
      return encoded;
    }
  } catch (err) {
    console.log(`Something fked up encoding ${err}`);
  }
}

export function encodeGameMsg(type, data) {
  const payload = { gameAction: {} };
  payload.gameAction[type] = data;
  return this.encode(payload);
}

export function encodeLobbyMsg(type, data) {
  const payload = { lobbyAction: {} };
  payload.lobbyAction[type] = data;
  return this.encode(payload);
}

export default {
  encode,
  decode,
  encodeGameMsg,
  encodeLobbyMsg,
};
