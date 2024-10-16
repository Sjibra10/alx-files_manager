import express from 'express';
import { router as appRoutes } from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Use routes middleware
app.use('/', appRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
