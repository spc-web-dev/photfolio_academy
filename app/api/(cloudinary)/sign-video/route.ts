import cloudinary from "@/lib/cloudinary/cloudinary-config";

export async function POST(request: Request) {
    const body = await request.json();
    const { paramsToSign } = body;
   
    const signature = cloudinary.utils.api_sign_request(paramsToSign, process.env.CLOUDINARY_API_SECRET as string);
    
    return Response.json({ signature });
  }
  
  