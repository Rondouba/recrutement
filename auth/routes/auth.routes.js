const express = require('express');
const authController = require('../controller/auth');

const router = express.Router();

// /**
//  * @typedef AuthReq
//  * @property {string} email.required
//  * @property {string} password.required
//  */

// /**
//  * @typedef SignUpReq
//  * @property {string} email.required
//  * @property {string} password.required
//  * @property {string} role.required - doit être client/restaurant
//  */

// /**
//  * Obtenir un token si les identifiants de connexion sont valides
//  * @route POST /auth/login
//  * @group Auth
//  * @param {AuthReq.model} AuthReq.body.required
//  * @returns {object} 200 - {token: token}
//  */
// router.post('/login', getToken);

// /**
//  * Utilisateur inscrit
//  * @route POST /auth/signup
//  * @group Auth
//  * @param {SignUpReq.model} SignUpReq.body.required
//  * @returns {object} 201 - {token: token}
//  */
// router.post('/signup', signUp);

// /**
//  * Valide JWT token
//  * @route GET /auth/validate
//  * @group Auth
//  * @param {string} token.query.required
//  * @returns {object} 201 - {token: token}
//  */
// router.get('/validate', validateToken);
router.post('/login', authController.getToken);
router.post('/signup', authController.signUp);
router.get('/validate', authController.validateToken);

module.exports = router;
