import { connect, set } from 'mongoose';
import { UserModel } from '../models/user.model.js';
import { FoodModel } from '../models/food.model.js';
import {AdminModel} from '../models/admin.model.js';
import {DUserModel} from '../models/deparmentaluser.model.js';

import bcrypt from 'bcryptjs';
const PASSWORD_HASH_SALT_ROUNDS = 10;
set('strictQuery', true);

export const dbconnect = async () => {
  try {
    connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await seedUsers();
    await seedDUsers();
    await seedAdmin();
    await seedFoods();
    console.log('connect successfully---');
  } catch (error) {
    console.log(error);
  }
};

async function seedUsers() {
  const usersCount = await UserModel.countDocuments();
  if (usersCount > 0) {
    console.log('Users seed is already done!');
    return;
  }
}
async function seedDUsers() {
  const dusersCount = await DUserModel.countDocuments();
  if (dusersCount > 0) {
    console.log('DUsers seed is already done!');
    return;
  }
}

async function seedAdmin() {
  const adminCount = await AdminModel.countDocuments();
  if (adminCount > 0) {
    console.log('admin seed is already done!');
    return;
  }
}

async function seedFoods() {
  const foods = await FoodModel.countDocuments();
  if (foods > 0) {
    console.log('Foods seed is already done!');
    return;
  }

  console.log('Foods seed Is Done!');
}
