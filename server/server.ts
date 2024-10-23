import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import * as authController from './controllers/authController';
import * as creditController from './controllers/creditController';
import * as paymentController from './controllers/paymentController';
import auth from './middleware/auth';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Auth routes
app.post('/api/auth/register', authController.register);
app.post('/api/auth/login', authController.login);

// Credit routes (protected)
app.get('/api/credits', auth, creditController.getCredits);
app.post('/api/credits/purchase', auth, creditController.purchaseCredits);
app.post('/api/credits/use', auth, creditController.useCredit);

// Payment routes (protected)
app.post('/api/payment/google-pay', auth, paymentController.processGooglePayPayment);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});