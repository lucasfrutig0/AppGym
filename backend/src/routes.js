import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import StudentsController from './app/controllers/StudentsController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'hello Lucas!!' });
});

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/create_students', StudentsController.store);
routes.put('/update_students', StudentsController.update);

export default routes;
