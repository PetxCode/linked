import { dbConfig } from "@/utils/dbConfig";
import userModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { email, password } = await req.json();

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await userModel.findOne({
      email,
    });

    if (user) {
      const check = await bcrypt.compare(password, user?.password);

      if (check) {
        return NextResponse.json({
          message: `welcome back ${user.name}`,
          status: 201,
          data: user,
        });
      } else {
        return NextResponse.json({
          message: "Error reading password",
          status: 404,
        });
      }
    } else {
      return NextResponse.json({
        message: "Error getting user",
        status: 404,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      status: 404,
      data: error,
    });
  }
};
