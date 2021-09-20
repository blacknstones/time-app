import { Router } from 'express';
import { createNote } from '../controllers/noteController.js';

const noteRouter = Router();

noteRouter.post('/', createNote);

export default noteRouter;