const express = require('express');

const {shopPage, shopPage2,shopPage3,shopPage4,shopPage5,shopPage6,shopPage7,shopPage8,shopPage9,shopPage10} = require('../controllers/shopController');

// INIT ROUTER

const router = express.Router();

// ROUTES

router.get('/', shopPage);
router.get('/category-2', shopPage2);
router.get('/category-3', shopPage3);
router.get('/category-4', shopPage4);
router.get('/category-5', shopPage5);
router.get('/category-6', shopPage6);
router.get('/category-7', shopPage7);
router.get('/category-8', shopPage8);
router.get('/category-9', shopPage9);
router.get('/category-10', shopPage10);




// EXPORT ROUTER

module.exports = router;