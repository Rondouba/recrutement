const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  jobId: mongoose.Types.ObjectId,
  userId: mongoose.Types.ObjectId,
  resume: String, // resumé
  coverLetter: String, // lettre de motivation
  answers: mongoose.Schema.Types.Mixed, // réponses
  date: Date,
  status: {
    type: String,
    enum: ['RECEIVED', 'UNDER_REVIEW', 'ACCEPTED', 'REJECTED'], // ['REÇU', 'SOUS RÉVISION', 'ACCEPTÉ', 'REFUSÉ']
  },
});

const Application = mongoose.model('applications', ApplicationSchema);

module.exports = { Application };
