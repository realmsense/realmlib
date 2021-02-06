import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent to prompt the server to send a `ReconnectPacket` which
 * contains the reconnect information for the used portal.
 */
export class UsePortalPacket implements Packet {

  readonly id = PacketMap.USEPORTAL;

  //#region packet-specific members
  /**
   * The object id of the portal to enter.
   */
  objectId: number;
  //#endregion

  constructor() {
    this.objectId = 0;
  }

  write(writer: Writer): void {
    writer.writeInt32(this.objectId);
  }

  read(reader: Reader): void {
    this.objectId = reader.readInt32();
  }
}
