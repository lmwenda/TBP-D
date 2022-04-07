import mongoose from "mongoose";

export interface IUser extends mongoose.Document{
    username: string,
    email: string,
    password: string,
    sessions?: [],
    date: Date
}

export interface TUser{
    username?: string,
    email?: string,
    password?: string,
    date?: Date
}