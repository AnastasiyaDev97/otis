export type LiteralObjectKeysT<T> = T extends Record<infer U, string> ? U : never;
