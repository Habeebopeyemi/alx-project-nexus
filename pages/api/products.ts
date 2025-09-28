// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`,
    {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.authorization || "",
      },
    }
  );

  const data = await apiRes.json();
  res.status(apiRes.status).json(data);
}
