'use strict';

import express from 'express';
import passport from 'passport';
import config from '../config/environment';
import User from '../api/user/user.model';
//require('./twitter/passport').setup(User, config);

console.log('Using Configuration:', config);

// Passport Configuration
require('./local/passport').setup(User, config);
require('./twitter/passport').setup(User, config);

var router = express.Router();

router.use('/local', require('./local'));
router.use('/twitter', require('./twitter'));

module.exports = router;
