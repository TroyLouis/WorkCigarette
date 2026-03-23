import { NextResponse } from "next/server";
import { writeFile, mkdir, readFile } from "fs/promises";
import path from "path";

// Simple in-file storage for development. Replace with a database or
// email service (Resend, Mailchimp, etc.) for production.
const STORAGE_PATH = path.join(process.cwd(), "data", "signups.json");

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const trimmed = email.trim().toLowerCase();
    if (!isValidEmail(trimmed)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const dir = path.dirname(STORAGE_PATH);
    await mkdir(dir, { recursive: true });

    let signups: string[] = [];
    try {
      const data = await readFile(STORAGE_PATH, "utf-8");
      signups = JSON.parse(data);
    } catch {
      // File doesn't exist yet
    }

    if (signups.includes(trimmed)) {
      return NextResponse.json(
        { error: "This email is already on the list" },
        { status: 409 }
      );
    }

    signups.push(trimmed);
    await writeFile(STORAGE_PATH, JSON.stringify(signups, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Could not save signup. Please try again." },
      { status: 500 }
    );
  }
}
