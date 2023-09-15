import { NextResponse } from 'next/server';

export async function GET() {
  const URL = 'https://randomuser.me/api/?results=24';
  const response = await fetch(URL);
  const data = await response.json();

  return await NextResponse.json({ data });
}
