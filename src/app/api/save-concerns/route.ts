import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { userConcerns } from "@/lib/db/schema";

export async function POST(req: Request) {
  try {
    const { chatId, concerns } = await req.json();

    // Save each concern to the database
    const savedConcerns = await Promise.all(
      concerns.map((concern: string) =>
        db.insert(userConcerns).values({
          chatId,
          concern,
        }).returning()
      )
    );

    return NextResponse.json({ success: true, concerns: savedConcerns });
  } catch (error) {
    console.error("Error saving concerns:", error);
    return NextResponse.json({ success: false, error: "Failed to save concerns" }, { status: 500 });
  }
}