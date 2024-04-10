const User = require('../../models/User');

const getUserRole = async (req, res) => {
  res.status(200).send(req.user);
};

module.exports = { getUserRole };