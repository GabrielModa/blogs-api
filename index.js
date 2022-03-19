require('dotenv').config();
const express = require('express');
require('express-async-errors');

const { errorHandler } = require('./middleware');
const { userRouter, loginRouter } = require('./routes/index.routes');

const app = express();
app.use(express.json());


app.use('/user',
userRouter);

app.use('/login',
loginRouter);

app.use(errorHandler);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`ouvindo porta ${process.env.PORT}`);
});
