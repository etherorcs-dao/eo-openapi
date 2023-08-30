import client from '../../../db/client';
import DiscordBotUser from '../../../db/models/DiscordBotUser';

export default async function handler(req, res) {
  try {
    await client();
    const verifiedDiscordUsers = await DiscordBotUser.find({ status: { $elemMatch: { name: 'Horde', roleId: '898730508303884329', result: true } } }).lean();
    const response = verifiedDiscordUsers.flatMap((result) => ({
      userId: result.userId,
      verified: true,
    }));
    return res.status(200).json(response);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
