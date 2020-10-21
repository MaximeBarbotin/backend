// import ressources necessaires//
const mongoose = require('mongoose');

//mise en place des shema//
const sauceSchema = mongoose.Schema({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  heat: { type: Number, required: true },
  mainPepper: { type: String, required: true },
  likes: { type: Number, required: true, default: 0 },
  dislikes: { type: Number, required: true, default: 0 },
  usersLiked: { type: Array, required: true, default: [] },
  usersDisliked: { type: Array, required: true, default: [] },
});

module.exports = mongoose.model('Sauce', sauceSchema);