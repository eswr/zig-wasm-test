// just keep a global ref to the instance around for convenience
let instance : WebAssembly.Instance;

// this function will be imported for wasm to use
function console_log_ex(location : number, size : number) {
    const buffer = new Uint8Array((instance.exports.memory as WebAssembly.Memory).buffer, location, size);
    const decoder = new TextDecoder();
    const string = decoder.decode(buffer);
    console.log(string);
}

// define our imports
const imports : WebAssembly.Imports = {
    env: {
        memory: new WebAssembly.Memory({initial: 1}),
        console_log_ex : console_log_ex,
    }
};

// do the thing
WebAssembly.instantiateStreaming(fetch("wasmtest.wasm"), imports).then(results => {
        instance = results.instance;
        // grab our exported function from wasm
        const add = (results.instance.exports.add as CallableFunction);
        console.log(add(3,4));
    });
