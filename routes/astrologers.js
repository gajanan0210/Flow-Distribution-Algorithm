// routes/astrologers.js
const express = require('express');
const router = express.Router();
const FlowDistribution = require('../services/flowDistribution');
const Astrologer = require('../models/astrologer');
const User = require('../models/user');

// Sample data
const astrologers = [
  new Astrologer(1, 'Astrologer 1'),
  new Astrologer(2, 'Astrologer 2', true)
];

const users = [
  new User(1, 'User 1'),
  new User(2, 'User 2')
];

const flowDistribution = new FlowDistribution(astrologers);

router.post('/distribute', (req, res) => {
  flowDistribution.distributeUsers(users);
  res.send('Users distributed successfully');
});

router.post('/adjustFlow', (req, res) => {
  const { isTopAstrologer, flowAdjustment } = req.body;
  flowDistribution.adjustTopAstrologerFlow(isTopAstrologer, flowAdjustment);
  res.send('Flow adjusted successfully');
});

module.exports = router;
