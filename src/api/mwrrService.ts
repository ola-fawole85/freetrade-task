import express, { Request, Response } from 'express';
import mwrrService from '../services/mwrrService';

const router = express.Router();

router.get('/mwrr/:userId', (req: Request, res: Response) => {
	const userId: string = req.params.userId;
	const mwrr = mwrrService.calculateMWRR(userId);
	res.json(mwrr);
});

export default router;
