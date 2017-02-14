module.exports = {
  db: {
    name: 'db',
    connector: 'mongodb',
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/booking'
  }
};
