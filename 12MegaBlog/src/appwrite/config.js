import conf from "../conf/conf.js";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  // Appwrite client
  client = new Client();
  databases;
  bucket;

  // Appwrite account service
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    // Appwrite database and storage services
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // Get all documents from a collection
  async createPost({ title, slug, content, status, featuredImage, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          featuredImage,
          userId,
        },
      );
    } catch (err) {
      console.log("Appwrite createPost error: ", err);
      throw err;
    }
  }

  // Update a document in a collection
  async updatePost(slug, { title, content, status, featuredImage }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          featuredImage,
        },
      );
    } catch (err) {
      console.log("Appwrite updatePost error: ", err);
      throw err;
    }
  }

  // Delete a document from a collection
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      );

      return true;
    } catch (err) {
      console.log("Appwrite deletePost error: ", err);
      return false;
    }
  }

  // Get one document from a collection
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      );
    } catch (err) {
      console.log("Appwrite getPost error: ", err);
      return null;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      );
    } catch (err) {
      console.log("Appwrite getPosts error: ", err);
      return false;
    }
  }

  // Upload a file to a bucket
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
      );
    } catch (err) {
      console.log("Appwrite uploadFile error: ", err);
      throw err;
    }
  }

  // delete a file from a bucket
    async deleteFile(fileId) {
      try {
        await this.bucket.deleteFile(
          conf.appwriteBucketId,
          fileId
        );
        return true;
      } catch (err) {
        console.log("Appwrite deleteFile error: ", err);
        return false;
      }
    }

    // get file preview URL from a bucket
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
          conf.appwriteBucketId,
          fileId
        );
    }
}

const service = new Service();

export default service;
