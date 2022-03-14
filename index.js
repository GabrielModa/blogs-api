require('dotenv').config();

const express = require('express');

const userRouter = require('./routes/user.routes');
const loginRouter = require('./routes/login.routes');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);

app.listen(process.env.PORT, () => {
  console.log(`ouvindo porta ${process.env.PORT}`);
});
