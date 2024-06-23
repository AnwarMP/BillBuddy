import { NextResponse } from "next/server";

// /api/create=chat
export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json()
    const {file_key, file_name}  = body
    console.log(file_key, file_name)
    return NextResponse.json(
        { message: "Success" },
    )
  } catch (error) {
    console.error(error);
    return NextResponse.json(
        { error: "An error occurred" },
        { status: 500}
    )
  }
}