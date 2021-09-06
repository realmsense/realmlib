# realmlib ![Build](https://github.com/Extacy/realmlib/actions/workflows/main.yml/badge.svg)

A networking library for Realm of the Mad God Exalt.

This project cannot be used by itself, it is designed to be used as a building block for larger RotMG projects which require an implementation of the RotMG networking protocol.

Projects using realmlib:
* [nrelay](https://github.com/Extacy/nrelay)
* [rotmg-proxy](https://github.com/Extacy/rotmg-proxy)

## Contents
+ [Install](#install)
+ [Docs](#docs)
+ [Usage](#usage)
+ [Acknowledgements](#acknowledgements)

## Install

Install realmlib:
```bash
# Add as a submodule (clones the repo)
git submodule add https://github.com/Extacy/realmlib
git submodule update --init

# Compile the code
cd realmlib
npm install
npm run compile

# Install realmlib
cd ..
npm install ./realmlib/
```

The compiled code will be present in the `dist/` directory for use.

## Docs
The inline API documentation can be generated in `./docs/` using the following command:
```
npm run docs
```

## Usage

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

```ts
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

## Acknowledgements

[thomas-crane](https://github.com/thomas-crane/realmlib-net) - Original realmlib project