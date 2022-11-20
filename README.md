## Svelte + Wasm + Tailwind
Base project template for building SPA UIs with Svelte powered by Rust/WASM for business logic

# Svelte
Svelte project bootstrapped with [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

# Rust
Rust is a strongly typed general perfect programing language. Install [here](https://www.rust-lang.org/tools/install)

# Wasm-Pack
This project uses ['wasm-pack'](https://rustwasm.github.io/wasm-pack/) to bundle Rust code for web deployment. Wasm-pack must be installed for RSW (see below) to work.
```shell
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

# RSW
This project uses ['RSW'](https://github.com/suren-m/rsw) to watch and build your rust project via wasm-pack. The ['vite-plugin-rsw'](https://github.com/rwasm/vite-plugin-rsw) actually watches your crate and implements hot reload along side your Svelte and Typescript code.

- RSW uses an rsw.toml to define crates for watch/build/package with vite. Just edit [[crates]] in your rsw.toml:
```toml
[[crates]]
name = "my-wasm-crate"
link = true
## The above is also what needs to be edited if you want to rename the 
## placeholder my-wasm-crate in this template
```
- The built wasm is simply imported as an npm module in your .ts/svelte code:
```ts
import init, { greet } from "my-wasm-crate"

export async function load() {
    await init()
    greet()
}
// The above code shows that your npm package name matches both the crate 
// name and directory name as specified in the rsw.toml. If you rename the 
// placeholder my-wasm-crate your npm package name is updated to match.

```
- Additional crates can be added and configured automatically via rsw
```shell
yarn rsw new <new-crate-name>
```
- Your new crate needs to be added to the rsw.toml
```toml
[[crates]]
name = "<new-crate-name>"
# <npm|yarn|pnpm> link
# ⚠️ Note: must be set to `true`, default is `false`
link = true
```
- Once registered in rsw.toml your crate can be imported as an npm module
```ts
import init, { foo, bar} from "<my-wasm-crate>"

await init() // Wasm has to be loaded before exported functionality is called
foo()
bar()
```
# Running
- dev build with hmr is run by `yarn dev`
- a production build will be populated in the /build directory via `yarn build`