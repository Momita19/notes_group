const express = require('express')
const {createGroup} = require('../controllers/createGroupController')
const { getAllGroupNames } = require('../controllers/getAllGroupNames');

const router = express.Router();

router.post('/notes', createGroup);
router.get('/notes',getAllGroupNames)

module.exports = router;