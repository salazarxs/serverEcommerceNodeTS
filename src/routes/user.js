import { Router } from 'express'
import { postNewUser, getUser, getFirstTime, putProfileImage, getProfileImage, testUser } from '../controllers/user';


const router = Router();

/* router.route('/user').post(postNewUser);
router.route('/user/login').post(getUser);
router.route('/user/firsttime').post(getFirstTime);
router.route('/user/profileimage').put(putProfileImage);
router.route('/user/getprofileimage').post(getProfileImage);
router.route('/user/testuser/:id').get(testUser); */

export default router;