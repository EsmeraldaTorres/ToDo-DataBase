const express = require('express');
const cors = require('cors');
const { sequelize } = require('./util/database');

const { todosRouter } = require('./routes/todo.routes');

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);

app.use('/api/v1/todos', todosRouter);

sequelize
  .authenticate()
  .then(() => console.log('Database authenticate'))
  .catch((err) => console.log(err));

sequelize
  .sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log('Express app running');
});
