import { NextResponse } from 'next/server';
import dbConnect from "@/lib/dbConnect";
import Place from "@/models/place";

export async function GET() {
  try {
    await dbConnect();
    
    const places = await Place.find({})
      .sort({ createdAt: -1 })
      .select('name image description mapsLinks googleMapsIframe lemonSqueezyLink createdAt');
    
    return NextResponse.json(places, { status: 200 });
    
  } catch (error) {
    console.error('Failed to fetch places:', error);
    return NextResponse.json(
      { error: 'Failed to fetch places' },
      { status: 500 }
    );
  }
}