require('dotenv').config();
const express = require('express');

require('express-async-errors');
const { errorHandler } = require('./middleware');

const userRouter = require('./routes/user.routes');
const loginRouter = require('./routes/login.routes');

const schemaHandler = require('./middleware/schemaHandler');
const loginSchema = require('./schemas/loginSchema');
const userSchema = require('./schemas/userSchema');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', schemaHandler(userSchema), userRouter);
app.use('/login', schemaHandler(loginSchema), loginRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`ouvindo porta ${process.env.PORT}`);
});
