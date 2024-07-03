// tests/flowDistribution.test.js
const FlowDistribution = require('../services/flowDistribution');
const Astrologer = require('../models/astrologer');
const User = require('../models/user');

test('distribute users evenly', () => {
  const astrologers = [
    new Astrologer(1, 'Astrologer 1'),
    new Astrologer(2, 'Astrologer 2')
  ];
  const users = [new User(1, 'User 1'), new User(2, 'User 2')];

  const flowDistribution = new FlowDistribution(astrologers);
  flowDistribution.distributeUsers(users);

  expect(astrologers[0].userCount).toBe(1);
  expect(astrologers[1].userCount).toBe(1);
});

test('adjust flow for top astrologer', () => {
  const astrologers = [
    new Astrologer(1, 'Astrologer 1', true),
    new Astrologer(2, 'Astrologer 2')
  ];
  const flowDistribution = new FlowDistribution(astrologers);

  flowDistribution.adjustTopAstrologerFlow(true, 1);
  expect(astrologers[0].userCount).toBe(-1);
});
