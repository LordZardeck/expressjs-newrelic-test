// Initialize New Relic
import express from 'express';
import cors from 'cors';

import vehicleRoutes from './routes/vehicle.js';

// Initialize app
const app = express();
const port = process.env.PORT;

// Use JSON for API requests
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// Prevent CORS restrictions during development
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT'],
    }),
);

// Set up endpoints
app.get('/', (req, res) => res.sendStatus(200));

// Setup router modules
app.use('/vehicle', vehicleRoutes);

// Start server
if (!port) throw new Error('No port was specified!');

app.listen(port, () => console.log(`Server started on port: ${port}`));
