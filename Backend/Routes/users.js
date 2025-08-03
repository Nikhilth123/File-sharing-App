import express from 'express';
import { Router } from 'express';
const router=express.Router();
router.post('/register', handleuserregistration);
router.post('/login',handleuserlogin);
export default router;