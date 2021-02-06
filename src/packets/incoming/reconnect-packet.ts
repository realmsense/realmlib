import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Received to instruct the client to connect to a new host.
 */
export class ReconnectPacket implements Packet {

  readonly id = PacketMap.RECONNECT

  //#region packet-specific members
  /**
   * The name of the new host.
   */
  name: string;
  /**
   * The address of the new host.
   */
  host: string;
  /**
   * > Unknown.
   */
  stats: string;
  /**
   * The port of the new host.
   */
  port: number;
  /**
   * The `gameId` to send in the next `HelloPacket`.
   */
  gameId: number;
  /**
   * The `keyTime` to send in the next `HelloPacket`.
   */
  keyTime: number;
  /**
   * The `key` to send in the next `HelloPacket`.
   */
  key: number[];
  //#endregion

  constructor() {
    this.name = "";
    this.host = "";
    this.stats = "";
    this.port = 0;
    this.gameId = 0;
    this.keyTime = 0;
    this.key = [];
  }

  read(reader: Reader): void {
    this.name = reader.readString();
    this.host = reader.readString();
    this.stats = reader.readString();
    this.port = reader.readInt32();
    this.gameId = reader.readInt32();
    this.keyTime = reader.readInt32();
    this.key = reader.readByteArray();
  }

  write(writer: Writer): void {
    writer.writeString(this.name);
    writer.writeString(this.host);
    writer.writeString(this.stats);
    writer.writeInt32(this.port);
    writer.writeInt32(this.gameId);
    writer.writeInt32(this.keyTime);
    writer.writeByteArray(this.key);
  }
}
