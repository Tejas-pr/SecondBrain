import mongoose, { model } from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

export const useModel = model("User", UserSchema);

const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", require: true },
});

export const contentModel = model("Content", ContentSchema);

const LinkSchema = new Schema({
  hash: String,
  userId: { type: mongoose.Types.ObjectId, ref: "User", require: true, unique: true },
});

export const LinkModel = model("Links", LinkSchema);
