import { connect } from "mongoose";
import { db } from "./constant";

export const dbConfig = async () => {
  try {
    await connect(db).then(() => {
      // console.clear();
      console.log("db connected 🚀🚀🚀");
    });
  } catch (error) {
    console.error(error);
  }
};
