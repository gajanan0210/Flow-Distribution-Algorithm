// models/astrologer.js
class Astrologer {
    constructor(id, name, isTopAstrologer = false) {
      this.id = id;
      this.name = name;
      this.isTopAstrologer = isTopAstrologer;
      this.userCount = 0;
    }
  }
  
  module.exports = Astrologer;
  