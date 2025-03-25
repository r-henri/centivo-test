import { ObjectId } from "mongodb";

export default interface User {
    _id: ObjectId;
    name: string;
    email: string;
    age: number;
}
