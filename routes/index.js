const express = require('express');
const app = express();
const homeController = require('../controllers/home_controller');


const router = express.Router();



router.get('/', homeController.home);

router.post('/create-habit', homeController.createHabit);

router.post('/update-habit/:id', homeController.updateHabit);

router.post('/show-habits', homeController.showHabit);

router.post('/delete-habit', homeController.deleteHabit);


module.exports = router;

