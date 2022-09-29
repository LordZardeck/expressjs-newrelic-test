import express from 'express';


const router = express.Router();

/** Returns a cache of all possible vehicle options from the fitment table. */
router.get('/tree', (req, res) => res.sendStatus(500));
/** Returns the image from Evox given a Vehicle and Trim. */
router.get('/image', (req, res) => res.sendStatus(500));

router.get('/fits', (req, res) => res.sendStatus(500));

/** Returns a csv export of the analytics_count table. */
router.get('/export', (req, res) => res.sendStatus(500));

export default router;
