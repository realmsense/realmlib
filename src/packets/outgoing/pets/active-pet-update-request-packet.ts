import { ActivePetUpdateType } from "../../../models/active-pet-update-type";
import { PacketMap } from "../../../models/packet-map";
import { Packet } from "../../../packet";
import { Reader } from "../../../reader";
import { Writer } from "../../../writer";

/**
 * Sent to make an update to the pet currently following the player.
 */
export class ActivePetUpdateRequestPacket implements Packet {

  readonly id = PacketMap.ACTIVE_PET_UPDATE_REQUEST
  propagate = true;

  //#region packet-specific members
  /**
   * The type of update to perform.
   */
  commandType: ActivePetUpdateType;
  /**
   * The instance id of the pet to update.
   */
  instanceId: number;
  //#endregion

  constructor() {
    this.commandType = 0;
    this.instanceId = 0;
  }

  write(writer: Writer): void {
    writer.writeByte(this.commandType);
    writer.writeInt32(this.instanceId);
  }

  read(reader: Reader): void {
    this.commandType = reader.readByte();
    this.instanceId = reader.readInt32();
  }
}
