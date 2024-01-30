const { Router } = require('express');
const router = Router();
const { postNewUser, getUser, getFirstTime, putProfileImage, getProfileImage, testUser } = require('../controllers/user');


/* router.route('/user').post(postNewUser);
router.route('/user/login').post(getUser);
router.route('/user/firsttime').post(getFirstTime);
router.route('/user/profileimage').put(putProfileImage);
router.route('/user/getprofileimage').post(getProfileImage);
router.route('/user/testuser/:id').get(testUser); */

module.exports = router; 