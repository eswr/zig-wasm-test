# zig-wasm-test
A minimal Web Assembly example built with Zig.

## Building

To build this project with a working Zig at 0.11.0 and TypeScript install at the project root just type.

```
zig build
```

You need to move the resulting wasmtest.wasm file from /zig-out/lib to /www/. One has been committed if you're happy omitting this step.

For good measure you can then build the TypeScript file:

```
cd www
tsc wasmtest.ts
```

## Running
Start the web server of your choice serving the www folder and navigate to wasmtest.html in your browser of choice. The value 7 should be output in the console.
