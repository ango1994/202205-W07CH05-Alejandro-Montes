/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import { mongooseConnect } from '../db/mongoose.js';

await mongooseConnect();

const robotSchema = new mongoose.Schema({
    speed: { type: String, required: [true, 'Need a title'] },
    endurance: String,
    creationDate: { type: Boolean, default: false },
});

export const Robot = mongoose.model('Robot', robotSchema);
