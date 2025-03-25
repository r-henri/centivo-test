import * as mongoDB from 'mongodb';

import User from '../models/user.js';

export class UserService {
    private static instance : UserService;

    private users?: mongoDB.Collection<User>;

    private constructor() { }

    public static getInstance() {
        if (!this.instance){
            this.instance = new UserService();
        }
        return this.instance;
    }

    public async initialize(connection: string, database: string) {
        if (this.users) {
            throw('Error: UserService initialized multiple times');
        }

        const client = new mongoDB.MongoClient(connection);
        await client.connect();

        const db = client.db(database);

        this.users = db.collection<User>('users');
        
        console.log('Connected to user db');
    }

    public isIdFormatValid(id: string){
        return mongoDB.ObjectId.isValid(id);
    }

    public async getUser(id: string, minAge?: number) {
        if (!this.isIdFormatValid(id)) {
            return;
        }

        const query: Record<string,any> = { _id: new mongoDB.ObjectId(id) };
        if (minAge){
            query.age = { $gt: minAge };
        }
        
        const result = await this.users!.findOne(query);
        return result;
    }
}
