import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Received to tell the player the object id of their current quest.
 */
export class QuestObjectIdPacket implements Packet {

  readonly id = PacketMap.QUESTOBJID

  //#region packet-specific members
  /**
   * The object id of the current quest.
   */
  objectId: number;
  //#endregion

  constructor() {
    this.objectId = 0;
  }

  read(reader: Reader): void {
    this.objectId = reader.readInt32();
  }

  write(writer: Writer): void {
    writer.writeInt32(this.objectId);
  }
}
