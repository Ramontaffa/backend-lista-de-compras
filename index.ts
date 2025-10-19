import express from 'express';
import routes from './src/routes/index.js';
import errorHandler from './src/middlewares/errorHandler.js';

const app = express();
app.use(express.json());

app.use(routes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});