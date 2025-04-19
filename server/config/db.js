import mongoose from 'mongoose';
import admin from 'firebase-admin';
import serviceAccount from '../firebase-service-account.json';

export function connectMongo() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('🔗 MongoDB connected'))
    .catch(err => console.error('MongoDB error:', err));
}

export function initFirebase() {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_RTDB_URL,
  });
  console.log('🔗 Firebase initialized');
}
