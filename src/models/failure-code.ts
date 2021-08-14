/**
 * Error IDs received in `FailurePacket`
 * Il2Cpp: Definied as const integers in `PGFHFIAAKOI` (FailurePacket)
 */
export enum FailureCode {
    /** Unknown. Il2Cpp: `FGHDLEBNFGK` */
    Unknown1 = 1,

    /** Received when the version number sent in `HelloPacket` is not the same as the Server's */
    IncorrectVersion = 4,

    /** Received when an incorrect key is sent in the `HelloPacket` */
    BadKey = 5,

    /** Received when the target of a `TeleportPacket` is not a valid target */
    InvalidTeleportTarget = 6,

    /** Received when the account that connected to the server does not have a verified email. */
    UnverifiedEmail = 7,

    /** Unknown, Il2Cpp: `PIAHDGICEDN` */
    Unknown8 = 8,

    /** Received when attempting to teleport to a player while the client has a teleport cooldown */
    TeleportBlocked = 9,

    /** Receieved when the client enters the wrong server (?) */
    WrongServer = 10,

    /** Unknown, Il2Cpp: `LNLJJCIDMGO` */
    Unknown14 = 14,

    /** Received when the client connects to a full server and is put in a queue */
    ServerFull = 15,

    /** Unknown, Il2Cpp: `NIIDIIFCBKL` */
    Unknown16 = 16,
}
