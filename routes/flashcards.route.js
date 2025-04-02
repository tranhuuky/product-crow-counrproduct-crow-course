import express from 'express';
import { getflashcardDetail, getflashcards, getCreateCard, postCreateCard, newCard, deleteFlashCard, baiTapTuVung } from '../controller/flashcards.controller.js';
import { auth, requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/flashcards', requireAuth, getflashcards);
router.get('/flashcards/card/:id', requireAuth, getflashcardDetail);
router.post('/flashcards/card/:id', requireAuth, newCard);
router.get('/flashcards/createCard', requireAuth, getCreateCard);
router.post('/flashcards/createCard', requireAuth, postCreateCard);
router.delete('/flashcards/delete/:id', requireAuth, deleteFlashCard);
router.get('/review/:id', requireAuth, baiTapTuVung);
export default router;