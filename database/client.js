import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  createdAt: { type: Date, default: Date },
  updatedAt: { type: Date, default: Date }
});

const Client = mongoose.model('Client', ClientSchema);

export default Client;
