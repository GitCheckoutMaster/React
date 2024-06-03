import { Client, Databases, ID, Query, Storage } from 'appwrite';
import conf from '../conf/conf.js';

export class postBlog {
    constructor() {
        this.client = new Client();
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.database = new Databases(this.client);  // this is a normal database where we put our posts
        this.storage = new Storage(this.client);  // this is a bucket means, photos and videos are stored in this bucket
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.database.createDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{
					title,
					content,
					featuredImage,
					status,
					userId,
				}
			);
        } catch (error) {
            console.log("Appwrite :: service :: createPost error: ", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status, userId}) {
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, 
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("Appwrite :: service :: updatePost error: ", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
            return true;
        } catch (error) {
            console.log("Appwrite :: service :: deletePost error: ", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.database.getDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug
			);
        } catch (error) {
            console.log("Appwrite :: service :: getPost error: ", error);
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.database.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries);
        } catch (error) {
            console.log("Appwrite :: service :: getPosts error: ", error);
        }
    }

    // file upload services
    async uploadFile(file) {
        try {
            return await this.storage.createFile(conf.appwriteBucketId, ID.unique(), file);
        } catch (error) {
            console.log("Appwrite :: service :: uploadFile error: ", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(conf.appwriteBucketId, fileId);
        } catch (error) {
            console.log("Appwrite :: service :: deleteFile error: ", error);
        }
    }

    // it is not async because the method used is fast and doesnt return promise, it just returns a url
    getFilePreview(fileId) {
        return this.storage.getFilePreview(conf.appwriteBucketId, fileId);
    }
}
const PostBlog = new postBlog();

export default PostBlog;
