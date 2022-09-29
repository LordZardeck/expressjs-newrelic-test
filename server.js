// Initialize New Relic
import express from 'express';
import vehicleRoutes from './routes/vehicle.js';

// Initialize app
const app = express();
const port = process.env.PORT;

// Set up endpoints
app.get('/', (req, res) => res.sendStatus(200));
app.get('/foo/bar', (req, res) => res.sendStatus(200));
app.get('/foo/baz', (req, res) => res.sendStatus(500));

// Setup router modules
app.use('/vehicle', vehicleRoutes);

// Start server
if (!port) throw new Error('No port was specified!');

app.listen(port, () => console.log(`Server started on port: ${port}`));
