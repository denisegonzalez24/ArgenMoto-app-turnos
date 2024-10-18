import { Router } from 'express';
import { getAllUsersController, getUserByIdController,createUserController,findUserByCredentialIdController} from '../../controller/usercontroller';

const router = Router();

router.get('/', getAllUsersController);
router.get('/:id', getUserByIdController);
router.post('/register', createUserController);
router.post('/login', findUserByCredentialIdController);

export default router;
