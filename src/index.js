import mongoose from 'mongoose';
import app from './app';

const port = process.env.PORT || 4000;

mongoose.connect(
  process.env.DATABASE_URL,
  { maxPoolSize: process.env.MONGO_POOLSIZE || 1 },
  (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('🔴 Database error: ', error);
    } else {
      // eslint-disable-next-line no-console
      console.log('✅ Database connected');
      app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`Example app listening on port ${port}`);
      });
    }
  },
);
