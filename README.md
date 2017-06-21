## Server side: Python

- protoc --python_out=. addressbook.proto

## Client side: JavaScript

- protoc --js_out=. addressbook.proto --plugin=protobuf-to-js/protoc-gen-js

## Development

- grunt dev
- GAE Application Server: http://localhost:12080
- Hotswap Server: http://localhost:9810

## Production

- grunt prod

## Demo

- http://web-protobuf.appspot.com
