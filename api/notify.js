export default async function handler(req, res) {
  const BOT_TOKEN = process.env.BOT_TOKEN;  // From Vercel env vars
  const CHAT_ID = '8067261762';
  
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: req.body.message
    })
  });
  
  res.status(200).json({ok: true});
}
