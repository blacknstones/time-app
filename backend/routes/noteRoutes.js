import { Router } from 'express';
import { createNote, deleteNote, getNotes } from '../controllers/noteController.js';

const noteRouter = Router();

noteRouter.post('/', createNote);
noteRouter.delete('/', deleteNote);
noteRouter.get('/', getNotes);

export default noteRouter;