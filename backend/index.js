import express from 'express';
import bodyParser from 'body-parser';
import { MongoDB } from './config/db.js';
import { PORT } from './config/config.js';
import { Router } from './routes/index.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', Router);

app.listen(PORT, async () => {
    await MongoDB();
    console.log(`Server is connected on port ${PORT}`)
})
