// jest.setup.ts
import "@testing-library/jest-dom";

// Ensure fetch & related APIs are available in Node.js tests
import { TextEncoder, TextDecoder } from "util";

// Polyfill TextEncoder/TextDecoder
if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder as any;
}
if (!global.TextDecoder) {
  global.TextDecoder = TextDecoder as any;
}
// Polyfill TransformStream if missing (Web Streams API)
if (!global.TransformStream) {
  const { TransformStream } = require("stream/web");
  global.TransformStream = TransformStream as any;
}
// Polyfill BroadcastChannel if missing
if (!global.BroadcastChannel) {
  const { BroadcastChannel } = require("worker_threads");
  global.BroadcastChannel = BroadcastChannel as any;
}

// If using Node 24, fetch/Response/Request should exist already,
// but to be safe we import whatwg-fetch as a fallback:
import "whatwg-fetch";

/**
 * whatwg-fetch provides fetch, Request, and Response in the Node.js test environment.
    MSW will hook into that, so your setupServer mock endpoints work correctly.
 */
