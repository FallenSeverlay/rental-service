import Router from "express";
import upload from '../middleware/upload.js';
import { addReview, getReviewsByOfferId } from "../controllers/reviewController.js";
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = new Router();

router.get('/:offerId', getReviewsByOfferId);
router.post("/:offerId", upload.none(), authenticateToken, addReview);

export default router;