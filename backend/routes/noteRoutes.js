import { Router } from 'express';
import { createNote, getNotes } from '../controllers/noteController.js';

const noteRouter = Router();

noteRouter.post('/', createNote);
noteRouter.get('/', getNotes);

export default noteRouter;