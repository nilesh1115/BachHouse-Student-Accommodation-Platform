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
      googleMapsLink: property.googleMapsLink || '',
      latitude: property.latitude || '',
      longitude: property.longitude || '',
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

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const deleted = await Property.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json({ success: false, message: 'Property not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: 'Property deleted successfully' });
  } catch (error) {
    console.error('Error deleting property:', error);
    return NextResponse.json({ success: false, message: 'Failed to delete property' }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    await connectDB();
    const body = await request.json();
    const update = {};
    if (typeof body.available !== 'undefined') update.available = body.available;
    const updated = await Property.findByIdAndUpdate(params.id, update, { new: true });
    if (!updated) {
      return NextResponse.json({ success: false, message: 'Property not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, property: updated });
  } catch (error) {
    console.error('Error updating property:', error);
    return NextResponse.json({ success: false, message: 'Failed to update property' }, { status: 500 });
  }
} 