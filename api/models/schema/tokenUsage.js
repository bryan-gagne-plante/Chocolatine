const mongoose = require('mongoose');

const tokenUsageSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true,
  },
  tokenUsage: {
    type: Number,
    default: 0,
  },
});

module.exports = tokenUsageSchema;