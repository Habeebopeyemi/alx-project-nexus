// pages/api/cart/[...cartPath].ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cartPath = [] } = req.query; // e.g. ["items"]
  const path = (cartPath as string[]).join("/"); // "items"

  // preserve query string (?page=1, etc.)
  const queryString = req.url?.includes("?") ? req.url.split("?")[1] : "";
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/cart/${path}${
    queryString ? `?${queryString}` : ""
  }`;

  const apiRes = await fetch(url, {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: req.headers.authorization || "",
    },
    body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
  });

  // try to parse JSON safely
  let data;
  try {
    data = await apiRes.json();
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Failed to parse backend response" + err });
  }

  res.status(apiRes.status).json(data);
}
