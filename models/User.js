const mongoose = require('mongoose');
let Schema = mongoose.Schema;

/////////////////////////////////////////////////////////
// Schema
/////////////////////////////////////////////////////////

let userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

/////////////////////////////////////////////////////////
// Statics
/////////////////////////////////////////////////////////

userSchema.statics.findByFirstName = function (firstName, next) {
  return this.find({ firstName: new RegExp(firstName, 'i') }, next);
};

/// EXPORT //////////////////////////////////////////////
module.exports = mongoose.model('User', userSchema);
/////////////////////////////////////////////////////////