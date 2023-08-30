import mongoose, { Schema } from 'mongoose';
import ActivitiesSchema from './ActivitiesSchema';
import MetadataSchema from './MetadataSchema';

const ShamanSchema = new Schema({
  _id: Number,
  owner: String, // address
  network: String,
  inBridge: Boolean,
  inDC: Boolean,
  activities: { type: ActivitiesSchema, required: false },
  metadata: { type: MetadataSchema, required: false },
});

export default mongoose.model('shamans', ShamanSchema);
