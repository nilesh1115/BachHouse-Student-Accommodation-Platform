import connectDB from "@/config/db";
import Property from "@/models/Property";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await connectDB();

        // Get query parameters
        const { searchParams } = new URL(request.url);
        const location = searchParams.get('location');
        const type = searchParams.get('type');
        const gender = searchParams.get('gender');
        const minRent = searchParams.get('minRent');
        const maxRent = searchParams.get('maxRent');
        const search = searchParams.get('search');

        // Build query
        let query = {};

        // Add location filter - Improved to handle partial matches better
        if (location && location !== 'All Locations') {
            query.location = { $regex: location, $options: 'i' };
        }

        // Add property type filter
        if (type && type !== 'All Types') {
            query.type = { $regex: type, $options: 'i' };
        }

        // Add gender filter
        if (gender && gender !== 'All') {
            query.gender = { $regex: gender, $options: 'i' };
        }

        // Add rent range filter
        if (minRent || maxRent) {
            query.rent = {};
            if (minRent) query.rent.$gte = parseInt(minRent);
            if (maxRent) query.rent.$lte = parseInt(maxRent);
        }

        // Add search filter - Improved to be more comprehensive
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { location: { $regex: search, $options: 'i' } },
                { address: { $regex: search, $options: 'i' } },
                { title: { $regex: search, $options: 'i' } }
            ];
        }

        console.log('Query:', JSON.stringify(query, null, 2));

        // Fetch properties with filters - Removed limit to get all matching properties
        const properties = await Property.find(query)
            .sort({ date: -1 });
            // Removed .limit(100) to get all matching properties
        
        console.log('Total properties found:', properties.length);
        
        // Log first few properties for debugging
        if (properties.length > 0) {
            console.log('Sample properties:');
            properties.slice(0, 3).forEach((prop, index) => {
                console.log(`Property ${index + 1}:`, {
                    name: prop.name,
                    location: prop.location,
                    type: prop.type,
                    gender: prop.gender,
                    rent: prop.rent
                });
            });
        }

        // Transform the properties to ensure all required fields are present
        const transformedProperties = properties.map(property => ({
            _id: property._id,
            name: property.name || '',
            title: property.title || property.name || '',
            description: property.description || '',
            type: property.type || '',
            proptype: property.proptype || property.type || '',
            rent: property.rent || 0,
            price: property.price || property.rent || 0,
            deposit: property.deposit || 0,
            gender: property.gender || '',
            location: property.location || '',
            address: property.address || '',
            amenities: Array.isArray(property.amenities) ? property.amenities : [],
            image: Array.isArray(property.image) ? property.image : [],
            occupancy: property.occupancy || '',
            ownerName: property.ownerName || '',
            phone: property.phone || '',
            ownerPhone: property.ownerPhone || property.phone || '',
            whatsappNumber: property.whatsappNumber || '',
            email: property.email || '',
            available: property.available !== false,
            distance: property.distance || '',
            furnishing: property.furnishing || 'Furnished',
            date: property.date || new Date()
        }));

        return NextResponse.json(transformedProperties);
    } catch (error) {
        console.error('Error fetching properties:', error);
        return NextResponse.json(
            { message: 'Failed to fetch properties' },
            { status: 500 }
        );
    }
}