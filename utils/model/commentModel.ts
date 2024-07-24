import { model, models, Schema, Types } from "mongoose";

interface iComment {
  content: string;
  userID: string;
  post: {};
}

interface iCommentData extends iComment, Document {}

const commentSchema = new Schema<iCommentData>(
  {
    content: {
      type: String,
    },
    userID: {
      type: String,
    },

    post: {
      type: Types.ObjectId,
      ref: "posts",
    },
  },
  { timestamps: true }
);

const commentModel =
  models.comments || model<iCommentData>("comments", commentSchema);

export default commentModel;
