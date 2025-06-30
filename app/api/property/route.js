import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Property from '@/models/Property';

export async function POST(request) {
  try {
    await connectDB();
    
    const formData = await request.formData();
    const propertyData = {};

    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
      if (key === 'amenities' || key === 'rules') {
        try {
          propertyData[key] = JSON.parse(value);
        } catch {
          propertyData[key] = value.split(',').filter(item => item.trim());
        }
      } else if (key === 'rent' || key === 'price' || key === 'deposit') {
        propertyData[key] = Number(value) || 0;
      } else if (key === 'available') {
        propertyData[key] = value === 'true';
      } else if (key === 'image') {
        if (!propertyData.images) {
          propertyData.images = [];
        }
        propertyData.images.push(value);
      } else {
        propertyData[key] = value;
      }
    }

    // Ensure required fields are present
    const requiredFields = ['title', 'name', 'type', 'ownerName', 'phone', 'ownerPhone'];
    const missingFields = requiredFields.filter(field => !propertyData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { message: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Set default values for optional fields
    propertyData.available = propertyData.available !== false;
    propertyData.furnishing = propertyData.furnishing || 'Furnished';
    propertyData.occupancy = propertyData.occupancy || '1';
    propertyData.amenities = propertyData.amenities || [];
    propertyData.rules = propertyData.rules || [];
    propertyData.distance = propertyData.distance || '';
    propertyData.email = propertyData.email || '';

    // Create new property
    const property = new Property(propertyData);
    await property.save();

    return NextResponse.json(
      { message: 'Property added successfully', property },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding property:', error);
    return NextResponse.json(
      { message: error.message || 'Failed to add property' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const properties = await Property.find({}).sort({ createdAt: -1 });
    return NextResponse.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    return NextResponse.json(
      { message: error.message || 'Failed to fetch properties' },
      { status: 500 }
    );
  }
} 