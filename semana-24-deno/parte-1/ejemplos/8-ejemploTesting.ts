import { assertStrictEquals, assertObjectMatch } from "https://deno.land/std@0.152.0/testing/asserts.ts";

Deno.test("testing example 1", () => {
  assertStrictEquals("world", "world");
});

Deno.test("testing example 2", () => {
  assertStrictEquals("world", "world2");
});

Deno.test("testing example 3", () => {
  assertObjectMatch({ hello: "world" }, { hello: "world" });
});
