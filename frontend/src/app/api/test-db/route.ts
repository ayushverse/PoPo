import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';

export async function GET() {
    try {
        await dbConnect();
        return NextResponse.json({ status: 'success', message: 'Connected to MongoDB Atlas!' }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ status: 'error', message: 'Failed to connect to DB', error: error.message }, { status: 500 });
    }
}
