const getHandlers = require('./get');
const postHandlers = require('./post');

module.exports = {
  get: {
    user: getHandlers.user,
    users: getHandlers.users,
  },
  post: {
    user: postHandlers.user,
  },
};
