import express from 'express';
import { suitsPage } from '../controllers/suitsPage.js'

const router = express.Router();

router.get('/', suitsPage)

export default router;