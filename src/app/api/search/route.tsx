import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchQuery = searchParams.get("searchQuery");

  if (!searchQuery) {
    return NextResponse.json(
      { error: "Please provide a search query" },
      { status: 400 }
    );
  }

  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

  const { results } = await res.json();

  return NextResponse.json({ results });
}
