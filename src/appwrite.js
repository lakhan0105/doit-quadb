import { Client, Account, Databases } from "appwrite";

// import env variables
const projectId = import.meta.env.VITE_PROJECT_ID;
const endpoint = import.meta.env.VITE_API_ENDPOINT;

export const client = new Client();

client.setEndpoint(endpoint).setProject(projectId);

export const account = new Account(client);
export const databases = new Databases(client);

export { ID } from "appwrite";
