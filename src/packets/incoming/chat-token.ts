import { Reader } from '../../reader';
import { Writer } from '../../writer';
import { Packet } from '../../packet';
import { PacketMap } from '../../models/packet-map';

export class ChatToken implements Packet {
    
    readonly id = PacketMap.CHATTOKEN

    token_: string;
    host_: string;
    port_: number;

    constructor()
    {
        this.token_ = "";
        this.host_ = "";
        this.port_ = 0;
    }

    read(reader: Reader): void {
        this.token_ = reader.readString();
        this.host_ = reader.readString();
        this.port_ = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeString(this.token_);
        writer.writeString(this.host_);
        writer.writeInt32(this.port_);
    }
}