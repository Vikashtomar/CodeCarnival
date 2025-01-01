import express from 'express';
// import { addUser, deleteUser } from './controller/userController.js';  // Adjust the import path as needed
import { addUser,deleteUser } from '../controller/userController.js';

const router = express.Router();

// Route for adding a new user
router.post('/user', addUser);

// Route for deleting a user by ID
router.delete('/user/:id', deleteUser);

export default router;
