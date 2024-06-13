const express = require('express');

const router = express.Router();

const { receiveEmail, } = require('../controllers/messageController')

//endpoint to receive user messages through Emails
router.post('/emails', receiveEmail);


module.exports = router;