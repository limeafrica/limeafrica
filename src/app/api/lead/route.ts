import { NextResponse } from "next/server";
import { site } from "@/content/site";

type LeadPayload = {
  name?: string;
  email?: string;
  company?: string;
  services?: string;
  message?: string;
};

function formatLeadEmail(body: LeadPayload) {
  return [
    `Name: ${body.name?.trim() ?? ""}`,
    `Email: ${body.email?.trim() ?? ""}`,
    body.company?.trim() ? `Company: ${body.company.trim()}` : null,
    body.services?.trim() ? `Services: ${body.services.trim()}` : null,
    body.message?.trim() ? `\nProject overview:\n${body.message.trim()}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[api/lead] RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email delivery is not configured" },
      { status: 503 },
    );
  }

  const from =
    process.env.LEAD_FROM_EMAIL ?? "LimeAfrica <onboarding@resend.dev>";
  const text = formatLeadEmail(body);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [site.email],
      reply_to: email,
      subject: `New inquiry from ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("[api/lead] Resend error:", detail);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
