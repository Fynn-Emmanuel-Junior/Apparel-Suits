import express from 'express';
import { suitsPage,suitItem } from '../controllers/controllers.js'

const router = express.Router();

router.get('/', suitsPage)
router.get('/:id',suitItem)

export default router;