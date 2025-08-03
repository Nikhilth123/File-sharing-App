import express from 'express';
import { Router } from 'express';
import {handleuserlogin,handleuserregistration}  from '../Controller/handleuser.js'

const router=express.Router();
router.post('/register', handleuserregistration);
router.post('/login',handleuserlogin);
export default router;