import express from "express";

import { getPosts } from '../controllers/posts.js';

const router = express.Router();

// This is connected to the controllers/posts.js file, which contains the handlers for the post routes, it is passed as the second parameter here.
router.get('/', getPosts);

export default router;