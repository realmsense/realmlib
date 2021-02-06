import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent when the player inflicts a condition effect.
 */
export class SetConditionPacket implements Packet {

  readonly id = PacketMap.SETCONDITION

  //#region packet-specific members
  /**
   * The condition effect being conflicted.
   */
  conditionEffect: number;
  /**
   * The duration of the conditin effect.
   */
  conditionDuration: number;
  //#endregion

  constructor() {
    this.conditionEffect = 0;
    this.conditionDuration = 0;
  }

  write(writer: Writer): void {
    writer.writeByte(this.conditionEffect);
    writer.writeFloat(this.conditionDuration);
  }

  read(reader: Reader): void {
    this.conditionEffect = reader.readByte();
    this.conditionDuration = reader.readFloat();
  }
}
