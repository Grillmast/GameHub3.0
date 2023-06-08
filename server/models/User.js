const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address']
  },
  savedGames: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Game'
    }
  ],
  ratedGames: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Game'
    }
  ]
});

userSchema.virtual('gameCount').get(function () {
  return this.savedGames.length;
});

const User = model('User', userSchema);

module.exports = User;
