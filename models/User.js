// import ressources necessaires//
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//defini regles mdp et email, email unique ! //
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);