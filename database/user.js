import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
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

const User = mongoose.model('User', UserSchema);

export default User;
