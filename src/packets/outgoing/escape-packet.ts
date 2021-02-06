import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";

/**
 * Sent to prompt the server to send a `ReconnectPacket` which
 * contains the reconnect information for the Nexus.
 */
export class EscapePacket implements Packet {

  readonly id = PacketMap.ESCAPE

  //#region packet-specific members

  //#endregion

  write(): void {
    //
  }

  read(): void {
    //
  }
}
