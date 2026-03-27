export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const body = req.body;

  const response = await fetch(process.env.ZAPIER_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ZAPIER_SECRET,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) return res.status(500).json({ error: "zapier failed" });

  res.status(200).json({ success: true });
}
