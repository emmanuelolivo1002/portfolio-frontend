import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const path = request.nextUrl.searchParams.get("path") || "/";

  console.log(
    `Received revalidation request for path: ${path} with secret: ${secret}`,
  );

  if (secret !== process.env.MY_SECRET_TOKEN) {
    console.log("Invalid token");
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    // Trigger revalidation
    await revalidatePath(path);
    console.log(`Successfully revalidated path: ${path}`);
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error(`Error revalidating path: ${path}`, err);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 },
    );
  }
}
