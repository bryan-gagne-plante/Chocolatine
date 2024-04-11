const mongoose = require('mongoose');
const tokenUsageSchema = require('./schema/tokenUsage');
const { logger } = require('~/config');

tokenUsageSchema.statics.check = async function ({
  user,
}) {
  const { tokenUsage: count } = (await this.findOne({ user }, 'tokenUsage').lean()) ?? {};

  logger.debug('[TokenUsage.check]', {
    user,
    count,
  });

  return { count };
};

module.exports = mongoose.model('TokenUsage', tokenUsageSchema);