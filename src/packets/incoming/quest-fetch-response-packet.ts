import { QuestData } from "../../data/quest-data";
import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../models/packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Received to tell the player about new quests.
 */
export class QuestFetchResponsePacket implements Packet {

    readonly id = PacketMap.QUEST_FETCH_RESPONSE

    //#region packet-specific members
    /**
     * The quests which were fetched.
     */
    quests: QuestData[];
    /**
     * The cost in gold of the next quest refresh.
     */
    nextRefreshPrice: number;
    //#endregion

    constructor() {
        this.quests = [];
        this.nextRefreshPrice = 0;
    }

    read(reader: Reader): void {
        const questsLen = reader.readInt16();
        this.quests = new Array<QuestData>(questsLen);
        for (let i = 0; i < questsLen; i++) {
            this.quests[i] = new QuestData();
            this.quests[i].read(reader);
        }
        this.nextRefreshPrice = reader.readInt16();
    }

    write(writer: Writer): void {
        writer.writeInt16(this.quests.length);
        for (const quest of this.quests) {
            quest.write(writer);
        }
        writer.writeInt16(this.nextRefreshPrice);
    }
}
