import { NextResponse } from 'next/server';
import dbConnect from "@/lib/dbConnect";
import Place from "@/models/place"

export async function POST(req) {
  try {
    await dbConnect();
    
    const body = await req.json();
    
    const place = await Place.create({
      name: body.name,
      image: body.image,
      description: body.description,
      mapsLinks: {
        google: body.mapsLinks?.google || null,
        yandex: body.mapsLinks?.yandex || null,
        twoGis: body.mapsLinks?.twoGis || null
      },
      googleMapsIframe: body.googleMapsIframe,
      lemonSqueezyLink: body.lemonSqueezyLink || null
    });

    return NextResponse.json({ success: true, data: place }, { status: 201 });
  } catch (error) {
    console.error('Place creation error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create place' },
      { status: 500 }
    );
  }
} 