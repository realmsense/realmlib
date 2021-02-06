import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * > Unknown.
 */
export class KeyInfoRequestPacket implements Packet {

  readonly id = PacketMap.KEY_INFO_REQUEST

  //#region packet-specific members
  /**
   * > Unknown.
   */
  itemType: number;
  //#endregion

  constructor() {
    this.itemType = 0;
  }

  write(writer: Writer): void {
    writer.writeInt32(this.itemType);
  }

  read(reader: Reader): void {
    this.itemType = reader.readInt32();
  }
}
