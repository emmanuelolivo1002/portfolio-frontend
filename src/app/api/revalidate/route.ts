import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-token");
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path") || "/";

  if (secret !== process.env.REVALIDATE_TOKEN) {
    console.log("Invalid token");
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    // Trigger revalidation
    await revalidatePath(path);
    console.log(`Successfully revalidated path: ${path}`);
    return NextResponse.json({ revalidated: true }, { status: 200 });
  } catch (err) {
    console.error(`Error revalidating path: ${path}`, err);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 },
    );
  }
}
