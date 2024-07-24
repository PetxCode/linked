import { model, models, Schema, Types } from "mongoose";

interface iPost {
  content: string;

  like: [];
  user: {};
  comment: {}[];
}

interface iPostData extends iPost, Document {}

const postSchema = new Schema<iPostData>(
  {
    content: {
      type: String,
    },
    like: {
      type: [],
    },

    user: {
      type: Types.ObjectId,
      ref: "users",
    },

    comment: [
      {
        type: Types.ObjectId,
        ref: "comments",
      },
    ],
  },
  { timestamps: true }
);

const postModel = models.posts || model<iPostData>("posts", postSchema);

export default postModel;
