import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'

dotenv.config()

const mongoURI = process.env.MONGODB_URI;

console.log('Connecting with database TrekkingBsAs...');
const client = await MongoClient.connect(
    mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true }
);
const coll = client.db('TrekkingBsAs').collection('trips');

console.log('Updating trips schema....')
await coll.updateMany({ 'title': { $exists: false } }, { $set: { title: '' } });
await coll.updateMany({ 'subtitle': { $exists: false } }, { $set: { subtitle: '' } });
await coll.updateMany({ 'category': { $exists: false } }, { $set: { category: 'Trekking' } });
await coll.updateMany({ 'description': { $exists: false } }, { $set: { description: '' } });
await coll.updateMany({ 'itinerary': { $exists: false } }, { $set: { itinerary: '' } });
await coll.updateMany({ 'created': { $exists: false } }, { $set: { created: Date.now } });
await coll.updateMany({ 'date': { $exists: false } }, { $set: { date: undefined } });
await coll.updateMany({ 'duration': { $exists: false } }, { $set: { duration: '1 dia' } });
await coll.updateMany({ 'price': { $exists: false } }, { $set: { price: 0 } });
await coll.updateMany({ 'location': { $exists: false } }, { $set: { location: '' } });
await coll.updateMany({ 'grading': { $exists: false } }, { $set: { grading: 1 } });
await coll.updateMany({ 'quota': { $exists: false } }, { $set: { quota: 1 } });
await coll.updateMany({ 'reservations': { $exists: false } }, { $set: { reservations: 0 } });
await coll.updateMany({ 'published': { $exists: false } }, { $set: { published: true } });
await coll.updateMany({ 'suggested_equipment': { $exists: false } }, { $set: { suggested_equipment: '' } });

console.log('Closing database...');
await client.close();
