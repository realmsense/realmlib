import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";

/**
 * > Unknown.
 */
export class CheckCreditsPacket implements Packet {

  readonly id = PacketMap.CHECKCREDITS

  //#region packet-specific members

  //#endregion

  write(): void {
    //
  }

  read(): void {
    //
  }
}
