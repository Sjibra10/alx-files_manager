import Bull from 'bull';
import dbClient from './utils/db';
import redisClient from './utils/redis';

// Create the queue
const userQueue = new Bull('userQueue', {
  redis: {
    host: '127.0.0.1',
    port: 6379,
  },
});

// Process the userQueue
userQueue.process(async (job, done) => {
  const { userId } = job.data;

  if (!userId) {
    console.error('Missing userId');
    return done(new Error('Missing userId'));
  }

  const user = await dbClient.db.collection('users').findOne({ _id: userId });

  if (!user) {
    console.error('User not found');
    return done(new Error('User not found'));
  }

  console.log(`Welcome ${user.email}!`);
  done(); // Mark the job as completed
});

// Handle worker errors
userQueue.on('error', (error) => {
  console.error(`Worker error: ${error}`);
});

