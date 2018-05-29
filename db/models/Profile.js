const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  about: {
    type: String
  },
  social: {
    instagram: {
      type: String
    },
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    linkedin: {
      type: String
    },
    youtube: {
      type: String
    },
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("profile", ProfileSchema);
