import mongoose, { model, Model } from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

export const useModel = model("User", UserSchema);
