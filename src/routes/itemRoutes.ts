import express, { Router } from 'express';
import itemController from '../controllers/itemController';

const router: Router = express.Router();

// CRUD routes
router.post('/', (req, res, next) => itemController.create(req, res, next));
router.get('/', (req, res, next) => itemController.findAll(req, res, next));
router.get('/:id', (req, res, next) => itemController.findById(req, res, next));
router.put('/:id', (req, res, next) => itemController.update(req, res, next));
router.delete('/:id', (req, res, next) => itemController.delete(req, res, next));
router.patch('/:id/toggle', (req, res, next) => itemController.toggleChecked(req, res, next));
router.delete('/', (req, res, next) => itemController.deleteAll(req, res, next));

export default router;
