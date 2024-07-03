import mongoose from "mongoose";

// Define the User schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    cardStatus: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
        default: Date.now
    }
});

// Update updatedAt field on every update
userSchema.pre('updateOne', function(next) {
    this.update({}, { $set: { updatedAt: new Date() } });
    next();
});

// Convert _id to id for better use in frontend
userSchema.methods.toJSON = function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
};

// Create and export the User model
const User = mongoose.model('User', userSchema);
export default User;
