import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: Number },
    // Array to hold sequential chat history and interactions over time
    history: [{
        timestamp: { type: Date, default: Date.now },
        type: { type: String }, // 'chat', 'skin_analysis', 'hair_analysis', 'recommendation', etc.
        data: { type: mongoose.Schema.Types.Mixed }
    }]
}, { timestamps: true });

// Compound index to quickly find user by email and phone
userSchema.index({ email: 1, phone: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);
export default User;
