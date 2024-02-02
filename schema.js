import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  email: String
});

// Define a model
const User = mongoose.model('User', UserSchema);

export default User;