const express = require('express');
const { body } = require('express-validator');
const {
  getCompanyReviews,
  getCompanyReviewById,
  updateCompanyReview,
} = require('../controllers/review');
const { employerCheckMiddleware } = require('../util/employerCheck');

const router = express.Router({ mergeParams: true });

/**
 * @typedef ReviewBody
 * @property {boolean} isFeatured.required
 */

const bodyValidators = () => [body('isFeatured').exists().isBoolean()];

/**
 * Obtenir la liste des avis sur l'entreprise
 * @route GET /companies/{compId}/reviews
 * @param {integer} page.query
 * @param {integer} limit.query
 * @param {string} compId.path
 * @param {string} sortBy.query
 * @param {string} sortOrder.query
 * @param {boolean} isFeatured.query
 * @group Reviews
 * @security JWT
 * @returns {Array.<ReviewBody>} 200 - Liste de jobs info
 */
router.get('/', getCompanyReviews);

/**
 * Obtenir un avis sur l'entreprise par ID
 * @route GET /companies/{compId}/reviews/{reviewId}
 * @param {string} compId.path
 * @param {string} reviewId.path
 * @group Reviews
 * @security JWT
 * @returns {ReviewBody.model} 200 - Review for given ID
 */
router.get('/:reviewId', getCompanyReviewById);

/**
 * Mettre à jour l'avis de l'entreprise par ID
 * @route PUT /companies/{compId}/reviews/{reviewId}
 * @param {string} compId.path
 * @param {string} reviewId.path
 * @group Reviews
 * @security JWT
 * @param {ReviewBody.model} ReviewBody.body.require
 * @returns {ReviewBody.model} 200 - Updated Job
 */
router.put('/:reviewId', ...bodyValidators(), employerCheckMiddleware, updateCompanyReview);

module.exports = router;
