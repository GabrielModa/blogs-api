require('dotenv').config();
const express = require('express');
require('express-async-errors');

const { errorHandler } = require('./middleware');
const { userRouter, loginRouter } = require('./routes/index.routes');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar

app.use('/user',
userRouter);

app.use('/login',
loginRouter);

app.get('/', (request, response) => {
  response.send();
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`ouvindo porta ${process.env.PORT}`);
});
