import express from 'express';
import cors from 'cors';
import routes from './routes/index';
import errorHandler from './middlewares/errorHandler';

const app = express();
app.use(express.json());

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://lista-de-compras-liart-iota.vercel.app/',
    'https://lista-de-compras-git-feat-integrated-main-ramontaffas-projects.vercel.app/'
  ]
}));

app.use(routes);

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});