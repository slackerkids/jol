import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    private: true,
    lowercase: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
