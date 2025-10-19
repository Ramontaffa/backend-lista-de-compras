import express, { Router, Request, Response } from 'express';
import userRoutes from './userRoutes';
import itemRoutes from './itemRoutes';

const router: Router = express.Router();

// root route
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'API Lista de Compras - Backend',
    status: 'online',
    endpoints: {
      users: '/users',
      items: '/items'
    }
  });
});

router.use('/users', userRoutes);
router.use('/items', itemRoutes);

export default router;
