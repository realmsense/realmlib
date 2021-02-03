/**
 * The error codes of errors which can be received in the `FailurePacket`.
 */
export enum FailureCode {
  /**
   * Received when the client attempts to connect using a blocked IP address.
   */
  IPBlocked = 0,
  /**
   * Received when the `buildVersion` sent in the `HelloPacket` is not the current one.
   */
  IncorrectVersion = 4,
  /**
   * Received when an incorrect `key` is sent in the `HelloPacket`.
   */
  BadKey = 5,
  /**
   * Received when the target of a `TeleportPacket` was not a valid target.
   */
  InvalidTeleportTarget = 6,
  /**
   * Received when the account that has connected does not have a verified email.
   */
  EmailVerificationNeeded = 7,
  /**
   * Received when teleporting when the client has the non-guild cooldown
   */
  TeleportRealmBlock = 9,
  /**
    * Received when the client enters the wrong server
    */
  WrongServerEntered = 10,
  /**
    * Received when the server the client enters has a queue
    */
  ServerQueueFull = 15
}
