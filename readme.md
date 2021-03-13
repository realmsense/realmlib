# realmlib

A networking library for Realm of the Mad God Exalt.

[![Build](https://github.com/Extacy/realmlib/actions/workflows/main.yml/badge.svg)](https://github.com/Extacy/realmlib/actions/workflows/main.yml)

## Contents

+ [Install](#install)
+ [Use](#use)
  + [Using the `PacketIO` class](#using-the-packetio-class)

## Install

Make sure you have [Nodejs 12+](https://nodejs.org/en/download/) installed then download the project:

```bash
git clone https://github.com/Extacy/realmlib.git
cd realmlib
```

Install the TypeScript compiler then compile the source:

```bash
npm install -g typescript
tsc -p .
```

Your compiled code will be in the `lib` folder ready to use

## Use

The realmlib networking module cannot be used on its own. It is designed to be used as a building block for larger RotMG projects which require an implementation of the RotMG networking protocol. Such project may include

+ MITM proxies (such as KRelay or JRelay).
+ Clientless applications (such as [nrelay](https://github.com/Extacy/nrelay)).

### Using the `PacketIO` class

The `PacketIO` class provides an event based way of sending and receiving RotMG packets. It is very likely that a project which depends upon realmlib will make use of the `PacketIO` class.

When a new `PacketIO` instance is constructed, it expects an object with 3 optional properties.

+ `socket` - An instance of [`net.Socket`](https://nodejs.org/api/net.html#net_class_net_socket)
+ `rc4` - An object which contains an incoming RC4 key and an outgoing RC4 key.

By default,

+ `socket` will be initialised to `undefined`.
+ `rc4` will be initialised to an object containing the current RotMG incoming and outgoing RC4 keys.

If a `socket` is provided, the `PacketIO` instance will be immediately attached to that socket. A `PacketIO` instance can always be attached to a socket after constructed via the `attach()` method, so providing a socket to the constructor is not necessary.

The default values which are used for the `rc4` property are set up for a clientless application. However, they are configurable to allow the `PacketIO` class to be used for other applications. For example, when building a MITM proxy, the `PacketIO` instance which listens to traffic coming from the server should use the **incoming** key for both the incoming and outgoing key configurations. The `PacketIO` instance which is listening to traffic coming from the client should use the **outgoing** key for both the incoming and outgoing key configurations.

```typescript
import { PacketIO, INCOMING_KEY, OUTGOING_KEY } from 'realmlib';

const serverIO = new PacketIO({
  rc4: {
    incomingKey: INCOMING_KEY,
    outgoingKey: INCOMING_KEY,
  }
});

const clientIO = new PacketIO({
  rc4: {
    incomingKey: OUTGOING_KEY,
    outgoingKey: OUTGOING_KEY,
  }
})
```
