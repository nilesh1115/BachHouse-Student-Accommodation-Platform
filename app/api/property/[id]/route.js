import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Property from '@/models/Property';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const property = await Property.findById(params.id);

    if (!property) {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      );
    }

    // Transform the property data to ensure all required fields are present
    const transformedProperty = {
      _id: property._id,
      name: property.name || 'Unnamed Property',
      description: property.description || '',
      location: property.location || 'Location not specified',
      address: property.address || '',
      type: property.type || 'Type not specified',
      gender: property.gender || 'Not specified',
      rent: property.rent || 0,
      deposit: property.deposit || 0,
      occupancy: property.occupancy || 'Not specified',
      image: property.image || [],
      amenities: property.amenities || [],
      rules: property.rules || [],
      ownerName: property.ownerName || 'Not specified',
      phone: property.phone || 'Not specified',
      email: property.email || '',
      date: property.date || new Date(),
    };

    return NextResponse.json(transformedProperty);
  } catch (error) {
    console.error('Error fetching property:', error);
    return NextResponse.json(
      { error: 'Failed to fetch property details' },
      { status: 500 }
    );
  }
} 