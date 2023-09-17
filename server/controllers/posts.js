import PostMessage from "../models/postMessage.js";

// req, res are the same across all route callbacks here.

export const getPosts = async (req, res) => {
    try {
        // This needs to be an async as it takes time to fetch the data from MongoDB
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}