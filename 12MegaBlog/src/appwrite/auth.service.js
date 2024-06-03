import { Client, Account,ID } from 'appwrite';
import conf from '../conf/conf.js';

export class AuthenticationService {
    constructor() {
        this.client = new Client();
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const user = await this.account.create(ID.unique(), email, password, name);
            if (user) {
                return this.login({email, password});
            } else {
                throw new Error("User not created");
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Error from login service");
            throw error;
        }
    }

    async logout() { 
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {   
            throw error;
        }
    }
}

export default new AuthenticationService();