import { clerkClient } from '@clerk/nextjs/server';

const authOwner = async (userId) => {
    try {
        const user = await clerkClient.users.getUser(userId);
        
        // Check for both 'Owner' and 'owner' to handle case sensitivity
        const role = user.publicMetadata.role?.toLowerCase();
        return role === 'owner';
    } catch (error) {
        console.error('Error in authOwner:', error);
        return false;
    }
}

export default authOwner;