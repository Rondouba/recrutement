const { Types } = require('mongoose');
const { errors } = require('u-server-utils');
const { Company } = require('../model');

const employerCheckMiddleware = async (req, res, next) => {
  if (req.method === 'GET') {
    next();
    return;
  }
  const { compId } = req.params;
  const { user } = req.headers;
  const company = await Company.findById(Types.ObjectId(compId));

  if (!company) {
    res.status(401).json({ ...errors.unauthorized, message: 'l entreprise n existe pas' });
    return;
  }

  if (!company.employers.find((e) => e.toString() === user)) {
    res
      .status(401)
      .json({ ...errors.unauthorized, message: 'l employeur n appartient pas à cette entreprise' });
    return;
  }

  req.params.compId = compId;

  next();
};

const employerCheckMiddlewareOnAll = async (req, res, next) => {
  const { compId } = req.params;
  const { user } = req.headers;
  const company = await Company.findById(Types.ObjectId(compId));

  if (!company) {
    res.status(401).json({ ...errors.unauthorized, message: 'l entreprise n existe pas' });
    return;
  }

  if (!company.employers.find((e) => e.toString() === user)) {
    res
      .status(401)
      .json({ ...errors.unauthorized, message: 'l employeur n appartient pas à cette entreprise' });
    return;
  }

  req.params.compId = compId;

  next();
};

module.exports = { employerCheckMiddleware, employerCheckMiddlewareOnAll };
