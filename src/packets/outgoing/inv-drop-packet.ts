import { SlotObjectData } from "../../data/slot-object-data";
import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent to drop an item from the client"s inventory.
 */
export class InvDropPacket implements Packet {

  readonly id = PacketMap.INVDROP

  //#region packet-specific members
  /**
   * The slot to drop the item from.
   */
  slotObject: SlotObjectData;
  //#endregion

  constructor() {
    this.slotObject = new SlotObjectData();
  }

  write(writer: Writer): void {
    this.slotObject.write(writer);
  }

  read(reader: Reader): void {
    this.slotObject.read(reader);
  }
}
