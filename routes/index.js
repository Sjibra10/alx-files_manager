import express from 'express';

const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('Hello from the root route!');
});

export { router };

