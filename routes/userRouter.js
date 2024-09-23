import { Router } from "express";
const router = Router()

import { getAllUsers, getUser, showCurrentUser, updateUser, changeUserPassword, deleteUser } from "../controllers/userController.js";

import { authenticateUser, authorizePermissions } from "../middleware/authMiddleware.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { validateUserPasswordChange } from "../middleware/validationMiddleware.js";


router.patch('/changeUserPassword', authenticateUser, validateUserPasswordChange, changeUserPassword);
router.get('/', authenticateUser, authorizePermissions('admin'), getAllUsers);
router.get('/currentUser', authenticateUser, showCurrentUser);
router.get('/:id', authenticateUser, authorizePermissions("admin"), getUser).delete(authenticateUser, authorizePermissions("admin"), deleteUser)
router.patch('/updateUser', authenticateUser, validateUpdateUserInput, updateUser)

// router.route('/changeUserPassword').patch(authenticateUser, validateUserPasswordChange, changeUserPassword);
// router.route('/').get(authenticateUser, authorizePermissions('admin'), getAllUsers)
//router.route('/currentUser').get(showCurrentUser)
// router.route('/:id').get(authenticateUser, authorizePermissions("admin"), getUser).patch(authenticateUser, validateUpdateUserInput, updateUser).delete(authenticateUser, authorizePermissions("admin"), deleteUser)

export default router
