import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '../../lib/connection';
import Concert from '../../models/Concert';

export async function POST(req) {
  const { date, venue, city, doors, show } = await req.json();

  console.log(date, venue, city, doors, show);

  try {
    await connectDB();
    
    const concert = await Concert.create({ date, venue, city, doors, show });

    return NextResponse.json({ msg: 'Concert created', data: concert });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ msg: 'Internal server error', error: error });
  }

  return NextResponse.json({ msg: 'Success' });
}
