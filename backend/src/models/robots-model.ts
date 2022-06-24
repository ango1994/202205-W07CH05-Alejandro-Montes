/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import { mongooseConnect } from '../db/mongoose.js';

await mongooseConnect();

const robotSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    speed: { type: Number, min: 0, max: 10, required: true },
    endurance: { type: Number, min: 0, max: 10, required: true },
    creationDate: { type: String, required: true },
});

export const Robot = mongoose.model('Robot', robotSchema);
