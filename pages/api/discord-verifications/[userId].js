import client from '../../../db/client';
import DiscordBotUser from '../../../db/models/DiscordBotUser';

const isDigits = (value) => {
  const val = !!Number(value);
  return val;
};

export default async function handler(req, res) {
  const { userId } = req.query;
  if (!isDigits(userId) || userId.length < 16) {
    return res.status(400).json({ error: 'Invalid discord id' });
  }
  try {
    await client();
    const response = {
      userId,
      verified: false,
    };
    const verifiedDiscordUser = await DiscordBotUser.findOne({ userId, status: { $elemMatch: { name: 'Horde', roleId: '898730508303884329', result: true } } }).lean();
    if (verifiedDiscordUser !== null) {
      response.verified = true;
    }
    return res.status(200).json(response);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
