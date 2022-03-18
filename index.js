require('dotenv').config();
const express = require('express');
require('express-async-errors');

const { errorHandler, schemaHandler } = require('./middleware');
const { userSchema, loginSchema } = require('./schemas');
const { userRouter, loginRouter } = require('./routes/index.routes');

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
