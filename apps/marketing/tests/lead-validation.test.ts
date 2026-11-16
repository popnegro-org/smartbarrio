import { test } from "node:test";
import assert from "node:assert/strict";
import { parseLeadInput } from "../lib/lead-validation";

test("lead input trims valid fields", () => {
  const result = parseLeadInput({
    businessSlug: " panaderia-la-esquina ",
    name: " Ada Lovelace ",
    phone: " 123456789 ",
    email: " ada@example.com ",
    message: " Quiero información ",
  });
  assert.equal(result.kind, "valid");
  if (result.kind === "valid") {
    assert.equal(result.payload.businessSlug, "panaderia-la-esquina");
    assert.equal(result.payload.name, "Ada Lovelace");
    assert.equal(result.payload.email, "ada@example.com");
  }
});

test("lead input rejects malformed emails and missing required fields", () => {
  assert.equal(parseLeadInput({ businessSlug: "x", name: "Ada", phone: "123456", email: "invalid", message: "Hola mundo" }).kind, "invalid");
  assert.equal(parseLeadInput({ businessSlug: "x", name: "A", phone: "123456", message: "Hola mundo" }).kind, "invalid");
});

test("lead honeypot returns success path without creating a lead", () => {
  assert.deepEqual(parseLeadInput({ website: "https://spam.example" }), { kind: "honeypot" });
});
