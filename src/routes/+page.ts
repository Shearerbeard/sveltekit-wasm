
import init, { greet } from "my-wasm-crate"

export async function load() {
    console.warn("Calling Page Load")
    await init()
    console.warn("WASM initialized")
    greet()
}
