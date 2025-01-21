import cloudinary from "@/lib/cloudinary/cloudinary-config";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json()) as { paramsToSign: Record<string, string> };
  const { paramsToSign } = body;

  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET as string
  );

  return NextResponse.json({ signature });
}
