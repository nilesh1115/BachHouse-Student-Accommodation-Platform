// app/api/property/add/route.js
import connectDB from '@/config/db';
import Property from '@/models/Property';
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

//configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request) {
    try {
        const { userId } = getAuth(request);
    
    if (!userId) {
      return NextResponse.json(
                { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

        console.log('Starting property addition process...');
        const formData = await request.formData();

        // Debug: Log all form data entries
        console.log('All form data entries:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Extract all required fields
        const propertyData = {
            title: formData.get('title'),
            name: formData.get('name'),
            description: formData.get('description'),
            type: formData.get('type'),
            proptype: formData.get('type'),
            gender: formData.get('gender'),
            rent: parseFloat(formData.get('rent')) || 0,
            price: parseFloat(formData.get('price')) || parseFloat(formData.get('rent')) || 0,
            deposit: parseFloat(formData.get('deposit')) || 0,
            occupancy: formData.get('occupancy') || '1',
            ownerName: formData.get('ownerName'),
            phone: formData.get('phone'),
            ownerPhone: formData.get('phone'),
            whatsappNumber: formData.get('whatsappNumber'),
            email: formData.get('email') || '',
            available: formData.get('available') !== 'false',
            distance: formData.get('distance') || '',
            furnishing: formData.get('furnishing') || 'Furnished',
            address: formData.get('address') || '',
            location: formData.get('location'),
            date: new Date(),
            userId: userId
        };

        // Validate required fields
        const requiredFields = ['title', 'name', 'type', 'ownerName', 'phone', 'ownerPhone', 'price'];
        const missingFields = requiredFields.filter(field => !propertyData[field]);
        
        if (missingFields.length > 0) {
            console.error('Missing required fields:', missingFields);
            return NextResponse.json(
                { success: false, message: `Missing required fields: ${missingFields.join(', ')}` },
                { status: 400 }
            );
        }

        // Handle amenities
        try {
            const amenitiesStr = formData.get('amenities');
            propertyData.amenities = amenitiesStr ? JSON.parse(amenitiesStr) : [];
        } catch (error) {
            console.error('Error parsing amenities:', error);
            propertyData.amenities = [];
        }

        // Handle rules
        try {
            const rulesStr = formData.get('rules');
            propertyData.rules = rulesStr ? JSON.parse(rulesStr) : [];
        } catch (error) {
            console.error('Error parsing rules:', error);
            propertyData.rules = [];
        }

        const files = formData.getAll('images');
        console.log('Number of images received:', files.length);

        if (!files || files.length === 0) {
            console.error('No images received in form data');
            return NextResponse.json(
                { success: false, message: "Please upload at least one image" },
                { status: 400 }
            );
        }

        console.log('Uploading images to Cloudinary...');
        const uploadPromises = files.map(async (file) => {
            try {
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                
                return new Promise((resolve, reject) => {
                    const uploadStream = cloudinary.uploader.upload_stream(
                        {
                            resource_type: 'auto',
                            folder: 'bachhouse/properties',
                        },
                        (error, result) => {
                            if (error) {
                                console.error('Cloudinary upload error:', error);
                                reject(error);
                            } else {
                                console.log('Image uploaded successfully:', result.secure_url);
                                resolve(result.secure_url);
                            }
                        }
                    );
                    uploadStream.end(buffer);
                });
            } catch (error) {
                console.error('Error processing image:', error);
                throw error;
            }
        });

        const imageUrls = await Promise.all(uploadPromises);
        console.log('All images uploaded successfully:', imageUrls);

        // Add images to property data
        propertyData.image = imageUrls;

        console.log('Connecting to MongoDB...');
        await connectDB();
        console.log('MongoDB connected successfully');

        // Debug: Log the property data before creating the model
        console.log('Property data before model creation:', propertyData);

        const newProperty = new Property(propertyData);

        // Debug: Log the property object before saving
        console.log('Property object before saving:', JSON.stringify(newProperty, null, 2));

        console.log('Saving property to database...');
       const savedProperty = await newProperty.save();
        console.log('Property saved successfully:', JSON.stringify(savedProperty, null, 2));

    return NextResponse.json({ 
      success: true, 
      message: "Property added successfully", 
      property: savedProperty 
    });

    } catch (error) {
    console.error('Error in property addition:', error);
    return NextResponse.json(
            { success: false, message: error.message || "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}