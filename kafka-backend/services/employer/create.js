const { Types } = require('mongoose');
const { getCompanyConnection } = require('../../dbconnections');

const handle_request = async (msg, callback) => {
  const { Employer, Company } = getCompanyConnection();

  try {
    const employer = await Employer.create(msg);

  // ajouter un employeur à l'entreprise si l'entreprise est fournie
    if (msg.companyId && msg.companyId != '') {
      await Company.updateOne(
        { _id: Types.ObjectId(msg.companyId) },
        { $push: { employers: employer._id } },
      );
    }
    callback(null, employer);
  } catch (err) {
    callback({ isError: true, error: err.toString() });
  }
};

module.exports = handle_request;
