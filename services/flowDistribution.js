// services/flowDistribution.js
class FlowDistribution {
    constructor(astrologers) {
      this.astrologers = astrologers;
    }
  
    distributeUsers(users) {
      users.forEach(user => {
        const astrologer = this.getNextAstrologer();
        astrologer.userCount++;
        console.log(`User ${user.name} assigned to ${astrologer.name}`);
      });
    }
  
    getNextAstrologer() {
      this.astrologers.sort((a, b) => a.userCount - b.userCount);
      return this.astrologers[0];
    }
  
    adjustTopAstrologerFlow(isTopAstrologer, flowAdjustment) {
      this.astrologers.forEach(astrologer => {
        if (astrologer.isTopAstrologer === isTopAstrologer) {
          astrologer.userCount -= flowAdjustment;
        }
      });
    }
  }
  
  module.exports = FlowDistribution;
  