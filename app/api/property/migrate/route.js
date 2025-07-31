import connectDB from '@/config/db';
import Property from '@/models/Property';
import { NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
//
export async function POST(request) {
    try {
        const { userId } = getAuth(request);
        
        if (!userId) {
            return NextResponse.json(
                { success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }

        await connectDB();

        const result = await Property.updateMany(
            { userId: { $exists: false } },
            { $set: { userId: userId } }
        );

        return NextResponse.json({
            success: true,
            message: `Updated ${result.modifiedCount} properties with your user ID`,
            modifiedCount: result.modifiedCount
        });

    } catch (error) {
        console.error("Error in property migration:", error);
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
} 