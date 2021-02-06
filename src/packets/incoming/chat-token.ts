import { Reader } from "../../reader";
import { Writer } from "../../writer";
import { Packet } from "../../packet";
import { PacketMap } from "../../models/packet-map";

export class ChatToken implements Packet {

        readonly id = PacketMap.CHATTOKEN;

        token: string;
        host: string;
        port: number;

        constructor() {
                this.token = "";
                this.host = "";
                this.port = 0;
        }

        read(reader: Reader): void {
                this.token = reader.readString();
                this.host = reader.readString();
                this.port = reader.readInt32();
        }

        write(writer: Writer): void {
                writer.writeString(this.token);
                writer.writeString(this.host);
                writer.writeInt32(this.port);
        }
}
