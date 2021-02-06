import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";

/**
 * Received to prompt the player to verify their email.
 */
export class VerifyEmailPacket implements Packet {

  readonly id = PacketMap.VERIFY_EMAIL

  //#region packet-specific members

  //#endregion

  read(): void {
    //
  }

  write(): void {
    //
  }
}
