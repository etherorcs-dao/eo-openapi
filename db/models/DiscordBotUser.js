import mongoose from 'mongoose';

const RoleStatusSchema = mongoose.Schema({
  name: String,
  roleId: String,
  result: Boolean,
});

const DiscordBotUserSchema = mongoose.Schema({
  _id: Number,
  userId: String, // discord userid
  walletAddress: String,
  lastVerified: Date,
  status: [RoleStatusSchema],
});

export default mongoose.models.discordbotusers || mongoose.model('discordbotusers', DiscordBotUserSchema);
