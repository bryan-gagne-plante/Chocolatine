const TokenUsage = require('../../models/TokenUsage');
const User = require('../../models/User');

async function tokenUsageController(req, res) {
  try {
    const tokenUsages = await TokenUsage.find({}).populate('user', 'email -_id');

    const result = tokenUsages.map((tokenUsage) => ({
      email: tokenUsage.user.email,
      tokenCount: tokenUsage.tokenUsage,
    }));

    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to fetch token usage' });
  }
}

module.exports = tokenUsageController;