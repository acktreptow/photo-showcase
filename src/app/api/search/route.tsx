import { NextResponse, NextRequest } from "next/server";
import { UnsplashImage } from "@/app/types/UnsplashImage";

type UnsplashSearchResponse = {
  results: UnsplashImage[];
};

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const searchQuery = searchParams.get("query");

  if (!searchQuery) {
    return NextResponse.json(
      { error: "Please provide a search query" },
      { status: 400 }
    );
  }

  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

  const { results }: UnsplashSearchResponse = await res.json();

  return NextResponse.json(results);
}
