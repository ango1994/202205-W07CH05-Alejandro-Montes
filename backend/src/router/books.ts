import { Router } from 'express';
import { MongooseController } from '../controller/mongoose-controller.js';
import { Robot } from '../models/robots-model.js';

export const robotsController = new MongooseController(Robot);
export const robotsRouter = Router();

robotsRouter.get('/', robotsController.getAllController);
robotsRouter.get('/:id', robotsController.getController);
robotsRouter.post('/', robotsController.postController);
robotsRouter.patch('/:id', robotsController.patchController);
robotsRouter.delete('/:id', robotsController.deleteController);
