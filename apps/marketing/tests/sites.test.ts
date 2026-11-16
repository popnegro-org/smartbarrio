import { test } from "node:test";
import assert from "node:assert/strict";
import { getBusinessSite, getBusinessSites } from "../data/sites";
test("demo business is discoverable and explicitly marked as fictitious", () => {
  const site = getBusinessSite("panaderia-la-esquina");
  assert.ok(site);
  assert.equal(site.status, "demo");
  assert.match(site.hero.eyebrow, /FICTICIO/);
});
test("draft sites are never exposed in public site listings", () => {
  assert.ok(getBusinessSites().every((site) => site.status !== "draft"));
});
test("business templates are constrained to the supported set", () => {
  const supported = ["commerce", "gastronomy", "services", "professional", "tourism"];
  assert.ok(getBusinessSites().every((site) => supported.includes(site.template)));
});

test("demo and published routes are separated by status", async () => {
  const { getDemoSites, getPublishedSites } = await import("../data/sites");
  assert.ok(getDemoSites().every((site) => site.status === "demo"));
  assert.ok(getPublishedSites().every((site) => site.status === "published"));
});
