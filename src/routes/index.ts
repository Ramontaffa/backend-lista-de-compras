import express, { Router, Request, Response } from 'express';
import userRoutes from './userRoutes';

const router: Router = express.Router();

// Rota raiz - Mensagem de boas-vindas
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'API Lista de Compras - Backend',
    status: 'online',
    endpoints: {
      users: '/users'
    }
  });
});

router.use('/users', userRoutes);

export default router;
