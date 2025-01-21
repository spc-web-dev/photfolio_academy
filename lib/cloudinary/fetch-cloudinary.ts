'use server'
import cloudinary from "./cloudinary-config";


export async function getResources(){
    const results = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`,
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY +
                ":" +
                process.env.CLOUDINARY_API_SECRET
            ).toString("base64")}`,
          },
        }
      ).then((r) => r.json());
      return results.resources
}


export async function fetchResources() {
  const { resources } = await cloudinary.search.expression('folder:photfolio').execute();
  return resources
}