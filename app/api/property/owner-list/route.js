import connectDB from "@/config/db";
import Property from "@/models/Property";
import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

// To get the list of properties owned by the authenticated user
export async function GET(request) {
    try {
        const { userId } = getAuth(request);
        
        if (!userId) {
            return NextResponse.json(
                { success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }

        await connectDB();

        const properties = await Property.find({ userId: userId })
            .sort({ date: -1 }); 

        return NextResponse.json(
            { success: true, properties },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in owner-list API:", error);
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}