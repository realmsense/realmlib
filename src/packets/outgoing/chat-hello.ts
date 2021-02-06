import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent to initiate the chat stream
 */
export class ChatHelloPacket implements Packet {

  readonly id = PacketMap.CHATHELLO

  //#region packet-specific members
  /**
   * The clients account ID
   */
  accountId: string;
  /**
   * The chat initiation token
   */
  token: string;
  //#endregion

  constructor() {
    this.accountId = "";
    this.token = "";
  }

  write(writer: Writer): void {
    writer.writeString(this.accountId);
    writer.writeString(this.token);
  }

  read(reader: Reader): void {
    this.accountId = reader.readString();
    this.token = reader.readString();
  }
}
