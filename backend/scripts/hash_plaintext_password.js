const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: './config.env' });

const User = require('../models/User');

// Helper: check if a string is a bcrypt hash
function isBcryptHash(str) {
  return typeof str === 'string' && str.startsWith('$2a$');
}

async function hashPlaintextPasswords() {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB');

  const users = await User.find();
  let updated = 0;

  for (const user of users) {
    if (!isBcryptHash(user.password)) {
      const hashed = await bcrypt.hash(user.password, 10);
      user.password = hashed;
      await user.save();
      console.log(`Updated password for user: ${user.email}`);
      updated++;
    }
  }

  console.log(`\nDone! Updated ${updated} user(s).`);
  mongoose.disconnect();
}

hashPlaintextPasswords().catch(err => {
  console.error('Error:', err);
  mongoose.disconnect();
}); 
