import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // Create a new account, then log in
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return await this.login({ email, password });
      }
      return userAccount;
    } catch (err) {
      throw err;
    }
  }

  // Login an existing account
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (err) {
      throw err;
    }
  }

  // Get the current logged in user (null if not logged in)
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (err) {
      console.log("Appwrite getCurrentUser error: ", err);
      return null;
    }
  }

  // Logout the current user
  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (err) {
      console.log("Appwrite logout error: ", err);
      throw err;
    }
  }
}

const authService = new AuthService();

export default authService;