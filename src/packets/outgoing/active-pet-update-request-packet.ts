import { Packet, PacketType, ActivePetUpdateType, Writer, Reader } from "../..";

/**
 * Sent to make an update to the pet currently following the player.
 */
export class ActivePetUpdateRequestPacket implements Packet {

    readonly type = PacketType.ACTIVE_PET_UPDATE_REQUEST;
    
    /**
     * The type of update to perform.
     */
    commandType: ActivePetUpdateType;
    /**
     * The instance id of the pet to update.
     */
    instanceId: number;
    
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
