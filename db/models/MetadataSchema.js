import { Schema } from 'mongoose';

const AttributeSchema = new Schema({
  trait_type: { type: String, required: false },
  value: { type: String, required: false },
  display_type: { type: String, required: false },
});

const MetadataSchema = new Schema({
  name: String,
  description: String,
  image: String,
  attributes: {
    type: [AttributeSchema],
  },
});

export default MetadataSchema;
