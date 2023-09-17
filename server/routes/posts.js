import express from "express";

const router = express.Router();

// req,res will be the same argument in all routes.
router.get('/', (req, res) => {
    res.send('THIS WORKS');
})

export default router;