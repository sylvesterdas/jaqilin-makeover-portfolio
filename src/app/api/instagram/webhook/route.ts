import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const verifyToken = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");
  const expectedVerifyToken = process.env.IG_WEBHOOK_VERIFY_TOKEN;

  if (!mode || !verifyToken || !challenge) {
    return new NextResponse("Missing webhook verification parameters", {
      status: 400,
    });
  }

  if (mode !== "subscribe" || verifyToken !== expectedVerifyToken) {
    return new NextResponse("Invalid webhook verification token", {
      status: 403,
    });
  }

  return new NextResponse(challenge, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

export async function POST() {
  return NextResponse.json({ received: true });
}
