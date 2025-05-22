import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from './config/ormconfig';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
import authRoutes from './routes/authRoutes';
app.use('/api/auth', authRoutes);
// Connect to DB and start server
AppDataSource.initialize()
  .then(() => {
    console.log('✅ Connected to PostgreSQL');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error: unknown) => console.error('❌ DB Connection Error:', error));

