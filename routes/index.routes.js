const userRouter = require('./user.routes');
const loginRouter = require('./login.routes');
const categoriesRouter = require('./categories.routes');
const blogPost = require('./blogPost.routes');

module.exports = {
  userRouter,
  loginRouter,
  categoriesRouter,
  blogPost,
};