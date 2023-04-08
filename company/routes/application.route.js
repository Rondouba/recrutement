const express = require('express');
const {
  getCompanyApplications,
  getCompanyApplicationById,
  updateCompanyApplication,
} = require('../controllers/application');

const router = express.Router({ mergeParams: true });

/**
 * @typedef ApplicationBody
 * @property {string} status.required
 */

const bodyValidators = () => [
  // body('status').exists().isString().isIn('RECEIVED', 'UNDER_REVIEW', 'ACCEPTED', 'REJECTED'),
];

/**
 * Obtenir la liste des applications de l'entreprise
 * @route GET /companies/{compId}/applications
 * @param {integer} page.query
 * @param {integer} limit.query
 * @param {string} compId.path
 * @group Applications
 * @security JWT
 * @returns {Array.<ApplicationBody>} 200 - List des applications info
 */
router.get('/', getCompanyApplications);

/**
 * Obtenir l'application de l'entreprise par ID
 * @route GET /companies/{compId}/applications/{appId}
 * @param {string} compId.path
 * @param {string} appId.path
 * @group Applications
 * @security JWT
 * @returns {ApplicationBody.model} 200 - Application for given ID
 */
router.get('/:appId', getCompanyApplicationById);

/**
 * Mettre à jour l'application de l'entreprise par ID
 * @route PUT /companies/{compId}/applications/{appId}
 * @param {string} compId.path
 * @param {string} appId.path
 * @group Applications
 * @security JWT
 * @param {ApplicationBody.model} ApplicationBody.body.require
 * @returns {ApplicationBody.model} 200 - Updated Application
 */
router.put('/:appId', ...bodyValidators(), updateCompanyApplication);

module.exports = router;
