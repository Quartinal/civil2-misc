// TypeScript bindings for emscripten-generated code.  Automatically generated at compile time.
interface WasmModule {
}

type EmbindString = ArrayBuffer|Uint8Array|Uint8ClampedArray|Int8Array|string;
interface EmbindModule {
  encode(_0: EmbindString): string;
  decode(_0: EmbindString): string;
  setSearchEngine(_0: EmbindString): void;
  setSearchTemplate(_0: EmbindString): void;
}

export type MainModule = WasmModule & EmbindModule;
export default function MainModuleFactory (options?: unknown): Promise<MainModule>;
