import { model, Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    department_name: { type: String, required: true },
    department_head: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

export const DUserModel = model('duser', UserSchema);