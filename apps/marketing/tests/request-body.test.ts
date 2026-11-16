import { test } from "node:test";
import assert from "node:assert/strict";
import { readJsonObject } from "../lib/request-body";

test("readJsonObject accepts a JSON object", async () => {
  const result = await readJsonObject(new Request("https://example.test", {
    method: "POST",
    body: JSON.stringify({ name: "Ada" }),
    headers: { "content-type": "application/json" },
  }));
  assert.equal(result.ok, true);
  if (result.ok) assert.equal(result.body.name, "Ada");
});

test("readJsonObject rejects invalid JSON and non-object payloads", async () => {
  const invalid = await readJsonObject(new Request("https://example.test", { method: "POST", body: "{" }));
  const array = await readJsonObject(new Request("https://example.test", { method: "POST", body: "[]" }));
  const nil = await readJsonObject(new Request("https://example.test", { method: "POST", body: "null" }));
  assert.deepEqual(invalid, { ok: false, status: 400 });
  assert.deepEqual(array, { ok: false, status: 400 });
  assert.deepEqual(nil, { ok: false, status: 400 });
});

test("readJsonObject rejects bodies above the 12 KB limit", async () => {
  const result = await readJsonObject(new Request("https://example.test", {
    method: "POST",
    body: JSON.stringify({ message: "x".repeat(12_100) }),
  }));
  assert.deepEqual(result, { ok: false, status: 413 });
});
