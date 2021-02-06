import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent to acknowledge a `GotoPacket`.
 */
export class GotoAckPacket implements Packet {

  readonly id = PacketMap.GOTOACK

  //#region packet-specific members
  /**
   * The current client time.
   */
  time: number;
  //#endregion

  constructor() {
    this.time = 0;
  }

  write(writer: Writer): void {
    writer.writeInt32(this.time);
  }

  read(reader: Reader): void {
    this.time = reader.readInt32();
  }
}
