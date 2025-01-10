import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { userValidationSchema } from './user.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(userValidationSchema.registerUserValidationSchema),
  UserControllers.registerUser,
);

export const UserRoutes = router;
