export type LeadPayload = {
  businessSlug: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type LeadInputResult =
  | { kind: "honeypot" }
  | { kind: "invalid" }
  | { kind: "valid"; payload: LeadPayload };

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseLeadInput(body: Record<string, unknown>): LeadInputResult {
  if (clean(body.website)) return { kind: "honeypot" };

  const payload = {
    businessSlug: clean(body.businessSlug),
    name: clean(body.name),
    phone: clean(body.phone),
    email: clean(body.email),
    message: clean(body.message),
  };

  if (
    payload.businessSlug.length < 1 || payload.businessSlug.length > 100 ||
    payload.name.length < 2 || payload.name.length > 100 ||
    payload.phone.length < 6 || payload.phone.length > 30 ||
    payload.message.length < 5 || payload.message.length > 2000 ||
    (payload.email && (payload.email.length > 254 || !emailPattern.test(payload.email)))
  ) {
    return { kind: "invalid" };
  }

  return { kind: "valid", payload };
}
