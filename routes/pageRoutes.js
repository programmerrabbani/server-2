const express = require('express');
const { showHomePage, showHomePage2, showHomePage3, showHomePage4, showHomePage5, showHomePage6 } = require('../controllers/pageController');


// INIT ROUTER

const router = express.Router();

// ROUTES

router.get('/', showHomePage);
router.get('/home-2', showHomePage2);
router.get('/home-3', showHomePage3);
router.get('/home-4', showHomePage4);
router.get('/home-5', showHomePage5);
router.get('/home-6', showHomePage6);





// EXPORT ROUTER

module.exports = router;