import { Account, Client } from "react-native-appwrite";
import conf from "../conf/conf";

export const client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    .setPlatform(conf.appwritePlatformId)


export const account = new Account(client);