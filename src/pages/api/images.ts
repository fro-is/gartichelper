import type { NextApiRequest, NextApiResponse } from "next";
import GoogleImages from "google-images";

interface GoogleImageSanitizedProps {
  url: string;
  parentPage: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Request received - ", req.method);

  if (req.method === "GET") {
    const { word } = req.query;
    console.log("Searching images for: ", word);

    const CSE_ID = process.env.GOOGLE_CSE_ID as string;
    const API_KEY = process.env.GOOGLE_API_KEY as string;

    const client = new GoogleImages(CSE_ID, API_KEY);
    const images = await client.search(`${word} desenho gartic`);

    res.json({
      images: images.map(
        (image): GoogleImageSanitizedProps => ({
          url: image.url,
          parentPage: image.parentPage,
        })
      ),
    });

    return;
  }

  res.status(405).json({
    message: "Método inválido",
  });
}
