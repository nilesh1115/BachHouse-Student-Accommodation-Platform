// app/api/property/add/route.js
import connectDB from '@/config/db';
import Property from '@/models/Property';
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

//configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request) {
    try {
        console.log('Starting property addition process...');
        const formData = await request.formData();

        const name = formData.get('name');
        const description = formData.get('description');
        const proptype = formData.get('type');
        const occupancy = formData.get('occupancy');
        const rent = formData.get('rent');
        const deposit = formData.get('deposit');
        const gender = formData.get('gender');
        const amenities = formData.get('amenities');
        const address = formData.get('address');

        console.log('Form data received:', { name, proptype, occupancy, rent, deposit, gender });

        const files = formData.getAll('images');

        if (!files || files.length === 0) {
            return NextResponse.json({ success: false, message: "Please upload at least one image" });
        }

        console.log('Uploading images to Cloudinary...');
        const uploadPromises = files.map(async (file) => {
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            
            return new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    {
                        resource_type: 'auto',
                        folder: 'bachhouse/properties', // Organize uploads in a folder
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
        });

        const imageUrls = await Promise.all(uploadPromises);
        console.log('All images uploaded successfully:', imageUrls);

        console.log('Connecting to MongoDB...');
        await connectDB();
        console.log('MongoDB connected successfully');

        const newProperty = new Property({
            name,
            description,
            proptype,
            occupancy,
            rent: parseFloat(rent),
            deposit: parseFloat(deposit),
            gender,
            amenities: amenities.split(',').map(item => item.trim()),
            address,
            image: imageUrls, // Store the array of image URLs
            date: Date.now(),
        });

        console.log('Saving property to database...');
        const savedProperty = await newProperty.save();
        console.log('Property saved successfully:', savedProperty);

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