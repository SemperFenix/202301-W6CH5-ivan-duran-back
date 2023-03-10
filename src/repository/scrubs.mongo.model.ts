import { model, Schema, SchemaTypes } from 'mongoose';

import { Scrub } from '../entities/scrub.model.js';

const scrubSchema = new Schema<Scrub>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
    required: true,
    unique: true,
  },
  occupattion: {
    type: String,
    required: true,
    unique: false,
  },
  personality: {
    type: String,
    required: true,
  },

  extendPerso: {
    type: String,
    required: true,
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
  },
});

export const ScrubModel = model('Scrub', scrubSchema, 'scrubs');
