const conf = {
    appwriteUrl: String(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT),
    appwriteProjectId: String(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID),
    appwritePlatformId: String(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM_ID),
    // appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    // appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    // appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf