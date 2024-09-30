const express = require('express');
const { getAllGroupName } = require('../controllers/getAllGroupNames');

const router = express.Router();

router.get('/notes', getAllGroupName);

module.exports = router;