import mongoose from 'mongoose';

// This is the Schema setup - The key-value pairs that will be stored in MongoDB
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// This is to assign it to a model that we can use throughout our app
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;