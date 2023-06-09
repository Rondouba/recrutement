/* eslint-disable newline-per-chained-call */
const express = require('express');
const { body } = require('express-validator');
const {
  getApplications,
  createApplication,
  getApplicationById,
  updateApplication,
  deleteApplication,
} = require('../controllers/application');

const router = express.Router();

/**
 * @typedef Application
 * @property {string} jobId.required
 * @property {string} userId.required
 * @property {string} resume.required
 * @property {string} coverLetter.required
 * @property {object} answers.required
 */

const bodyValidators = () => [
  body('jobId').exists().isString(),
  body('userId').exists().isString(),
  body('resume').exists().isString(),
  body('coverLetter').exists().isString(),
  body('answers').isObject(),
];

const updateValidators = () => [
  body('resume').optional().isString(),
  body('coverLetter').optional().isString(),
  body('answers').optional().isObject(),
  body('status').optional().isString(),
];

/**
 * List des candidatures
 * @route GET /applications
 * @param {integer} page.query
 * @param {integer} limit.query
 * @param {string} userId.query
 * @param {strint} jobIds.query
 * @group Application
 * @security JWT
 * @returns {Array.<Application>} 200 - Liste des infos sur les candidatures
 */
router.get('/', getApplications);

/**
 * Créer un candidat
 * @route POST /applications
 * @group Application
 * @security JWT
 * @param {Application.model} Application.body.require
 * @returns {Application.model} 201 - Created Application
 */
router.post('/', ...bodyValidators(), createApplication);

/**
 * Get candidats par ID
 * @route GET /applications/{id}
 * @group Application
 * @security JWT
 * @param {string} id.path.require
 * @returns {Application.model} 200 - Application for given ID
 */
router.get('/:id', getApplicationById);

/**
 * Mise à jour candidat par ID
 * @route PUT /applications/{id}
 * @group Application
 * @security JWT
 * @param {string} id.path.require
 * @param {Application.model} Application.body.require
 * @returns {Application.model} 200 - Updated Application
 */
router.put('/:id', ...updateValidators(), updateApplication);

/**
 * Supprimer candidat par ID
 * @route DELETE /applications/{id}
 * @group Application
 * @security JWT
 * @param {string} id.path.require
 * @returns {null} 200 - Delete Application
 */
router.delete('/:id', deleteApplication);

module.exports = router;
