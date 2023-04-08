/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import StarRatings from 'react-star-ratings';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import addReview from '../../../api/review/addReview';

import '../css/AddReviewModal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: '90%',
  overflowY: 'scroll',
  overflowX: 'hidden',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AddReviewModal({
  handleClose, isOpen, compId, companyName, logo,
}) {
  const [overallRating, setOverallRating] = useState(0);
  const user = useSelector((state) => state.user);
  const [summary, setSummary] = useState('');
  const [review, setReview] = useState('');
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');
  const [tips, setTips] = useState('');
  const [ceoApproval, setCeoApproval] = useState(true);
  const [workLifeBalance, setWorkLifeBalance] = useState(0);
  const [compensation, setCompensation] = useState(0);
  const [jobSecurity, setJobSecurity] = useState(0);
  const [management, setManagement] = useState(0);
  const [jobCulture, setJobCulture] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    function getFormattedDate(date) {
      const year = date.getFullYear();
      const month = (1 + date.getMonth()).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');

      return `${month}/${day}/${year}`;
    }
    const date = getFormattedDate(new Date());
    const reviewData = {
      workLifeBalance,
      compensation,
      jobSecurity,
      management,
      jobCulture,
      overallRating,
      summary,
      review,
      pros,
      cons,
      tips,
      ceoApproval,
      userId: user && user.user && user.user.id ? user.user.id : null,
      companyId: compId,
      isFeatured: false,
      status: 'PENDING',
      reviewDate: date,
      helpful: 0,
    };
    setIsLoading(true);
    await addReview(reviewData);
    setIsLoading(false);
    setOverallRating(0);
    setSummary('');
    setReview('');
    setPros('');
    setCons('');
    setTips('');
    setCeoApproval(true);
    setWorkLifeBalance(0);
    setCompensation(0);
    setJobSecurity(0);
    setJobCulture(0);
    setManagement(0);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <div
              style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}
            >
              <img
                className="modal-company-logo"
                src={logo}
                alt="Logo"
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  marginLeft: '15px',
                }}
              >
                <Typography
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1.4rem',
                    lineHeight: '1.25',
                  }}
                >

                  Prenez une minute pour passer en revue
                  {' '}
                  {companyName}
                  .
                </Typography>
                <p
                  style={{
                    fontSize: '.875rem',
                    lineHeight: '1.25',
                    color: '#595959',
                    marginLeft: '1px',
                    marginTop: '4px',
                  }}
                >
                  Vos commentaires anonymes aideront les autres demandeurs d'emploi
                  <ul>
                    <li>
                      Les avis sur les entreprises sont
                      {' '}
                      <span style={{ fontWeight: 'bold' }}>JAMAIS</span>
                      {' '}
                      attaché
                      à vos candidatures
                    </li>
                    <li>
                      Les critiques
                      {' '}
                      <span style={{ fontWeight: 'bold' }}>SEUL</span>
                      {' '}
                      inclure l'étoile
                      évaluations, texte de révision, titre du poste, lieu et date de révision
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <hr />
            <div
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
            >
              <Typography
                style={{
                  marginTop: '15px',
                  fontWeight: 'bold',
                  fontSize: '1.25em',
                  lineHeight: '1.25',
                  marginBottom: '0.5rem',
                }}
              >
                Comment évalueriez-vous cette entreprise?
              </Typography>
              <p style={{ color: '#db183f' }}>* Cases obligatoires</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '350px',
                alignItems: 'flex-start',
              }}
            >
              <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                Note globale
                {' '}
                <span style={{ color: '#db183f' }}> *</span>
              </p>
              <div style={{ marginTop: '10px' }}>
                <StarRatings
                  style={{ marginTop: '10px' }}
                  rating={overallRating}
                  starRatedColor="#FCB100"
                  starHoverColor="#FCB100"
                  numberOfStars={5}
                  name="overallRating"
                  changeRating={(newRating) => setOverallRating(newRating)}
                  starDimension="30px"
                  starSpacing="2px"
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '350px',
                alignItems: 'flex-start',
              }}
            >
              <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                L'équilibre de travail
                {' '}
                <span style={{ color: '#db183f' }}> *</span>
              </p>
              <div style={{ marginTop: '10px' }}>
                <StarRatings
                  style={{ marginTop: '10px' }}
                  rating={workLifeBalance}
                  starRatedColor="#FCB100"
                  starHoverColor="#FCB100"
                  numberOfStars={5}
                  name="workLifeBalance"
                  changeRating={(newRating) => setWorkLifeBalance(newRating)}
                  starDimension="30px"
                  starSpacing="2px"
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '350px',
                alignItems: 'flex-start',
              }}
            >
              <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                Compensation
                {' '}
                <span style={{ color: '#db183f' }}> *</span>
              </p>
              <div style={{ marginTop: '10px' }}>
                <StarRatings
                  style={{ marginTop: '10px' }}
                  rating={compensation}
                  starRatedColor="#FCB100"
                  starHoverColor="#FCB100"
                  numberOfStars={5}
                  name="compensation"
                  changeRating={(newRating) => setCompensation(newRating)}
                  starDimension="30px"
                  starSpacing="2px"
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '350px',
                alignItems: 'flex-start',
              }}
            >
              <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                La sécurité d'emploi
                {' '}
                <span style={{ color: '#db183f' }}> *</span>
              </p>
              <div style={{ marginTop: '10px' }}>
                <StarRatings
                  style={{ marginTop: '10px' }}
                  rating={jobSecurity}
                  starRatedColor="#FCB100"
                  starHoverColor="#FCB100"
                  numberOfStars={5}
                  name="jobSecurity"
                  changeRating={(newRating) => setJobSecurity(newRating)}
                  starDimension="30px"
                  starSpacing="2px"
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '350px',
                alignItems: 'flex-start',
              }}
            >
              <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                Management
                {' '}
                <span style={{ color: '#db183f' }}> *</span>
              </p>
              <div style={{ marginTop: '10px' }}>
                <StarRatings
                  style={{ marginTop: '10px' }}
                  rating={management}
                  starRatedColor="#FCB100"
                  starHoverColor="#FCB100"
                  numberOfStars={5}
                  name="management"
                  changeRating={(newRating) => setManagement(newRating)}
                  starDimension="30px"
                  starSpacing="2px"
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '350px',
                alignItems: 'flex-start',
              }}
            >
              <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                Culture d'emploi
                {' '}
                <span style={{ color: '#db183f' }}> *</span>
              </p>
              <div style={{ marginTop: '10px' }}>
                <StarRatings
                  style={{ marginTop: '10px' }}
                  rating={jobCulture}
                  starRatedColor="#FCB100"
                  starHoverColor="#FCB100"
                  numberOfStars={5}
                  name="jobCulture"
                  changeRating={(newRating) => setJobCulture(newRating)}
                  starDimension="30px"
                  starSpacing="2px"
                />
              </div>
            </div>
            <hr />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                style={{
                  marginTop: '15px',
                  fontWeight: 'bold',
                  fontSize: '1.25em',
                  lineHeight: '1.25',
                  marginBottom: '0.5rem',
                }}
              >
                Le bien et le mal.
                Qu'est-ce qui ressort du fait de travailler dans cette entreprise?
              </Typography>
              <form onSubmit={handleSubmit}>
                <p style={{ fontWeight: 'bold', color: '#666' }}>
                  Résumé des commentaires
                  {' '}
                  <span style={{ color: '#db183f' }}>*</span>
                </p>
                <TextField
                  sx={{ width: '550px' }}
                  placeholder="Exemple : lieu de travail productif et amusant avec table de ping-pong"
                  required
                  value={summary}
                  onChange={(event) => setSummary(event.target.value)}
                />
                <p style={{ fontWeight: 'bold', color: '#666' }}>
                  Votre avis
                  {' '}
                  <span style={{ color: '#db183f' }}>*</span>
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'flex-start',
                  }}
                >
                  <TextField
                    multiline
                    rows={11}
                    sx={{ width: '550px' }}
                    required
                    value={review}
                    onChange={(event) => setReview(event.target.value)}
                  />
                  <div
                    aria-label="opinion"
                    style={{ marginLeft: '30px', marginTop: '-30px', width: 'calc(100% - 580px)' }}
                  >
                    <p style={{ fontWeight: 'bold', fontSize: '13px' }}>
                      Donnez-nous votre avis sur
                    </p>
                    <ul>
                      <li>une journée type au travail</li>
                      <li>ce que vous avez appris</li>
                      <li>gestion</li>
                      <li>culture du lieu de travail</li>
                      <li>la partie la plus difficile du travail</li>
                      <li>la partie la plus agréable du travail</li>
                    </ul>
                    <p style={{ fontSize: '13px' }}>
                      N'incluez PAS d'informations confidentielles sur l'entreprise ou
                      d'informations personnellement identifiables
                      informations telles que les noms.
                    </p>
                    <p style={{ fontSize: '13px' }}>
                      L'avis sur votre entreprise et l'intitulé de votre poste seront affichés
                      publiquement sur DATECenter Recrutement.
                    </p>
                    <p style={{ color: '#085ff7', fontSize: '13px' }}>
                      Directives d'examen
                      {' '}
                      <OpenInNewIcon fontSize="13px" />
                    </p>
                  </div>
                </div>
                <p style={{ fontWeight: 'bold', color: '#666' }}>
                  Avantages
                  {' '}
                  <span style={{ color: '#db183f' }}>*</span>
                </p>
                <TextField
                  sx={{ width: '550px' }}
                  placeholder="Exemple : Repas gratuits, etc."
                  required
                  value={pros}
                  onChange={(event) => setPros(event.target.value)}
                />

                <p style={{ fontWeight: 'bold', color: '#666' }}>
                  Inconvénients
                  {' '}
                  <span style={{ color: '#db183f' }}>*</span>
                </p>
                <TextField
                  sx={{ width: '550px' }}
                  placeholder="Exemple : Courts séjours, soins de santé, etc."
                  required
                  value={cons}
                  onChange={(event) => setCons(event.target.value)}
                />

                <hr style={{ marginTop: '35px' }} />
                <div>
                  <Typography
                    style={{
                      marginTop: '15px',
                      fontWeight: 'bold',
                      fontSize: '1.25em',
                      lineHeight: '1.25',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Que pensez-vous du PDG ?
                  </Typography>
                  <p style={{ fontWeight: 'bold', color: '#666' }}>
                    Approuvez-vous
                    {' '}
                    {companyName}
                    {' '}
                    le PDG?
                    {' '}
                  </p>
                  <div
                    style={{
                      borderRadius: '30px',
                      width: '500px',
                      overflow: 'visible',
                    }}
                  >
                    <button
                      onClick={() => setCeoApproval(true)}
                      className={`ceoButtonHover ${ceoApproval ? 'ceoButtonOnSelect' : ''}`}
                      type="button"
                      style={{
                        borderRadius: '40px',
                        width: '250px',
                        height: '50px',
                        fontWeight: 'bold',
                        fontSize: 'large',
                      }}
                    >
                      OUI
                    </button>
                    <button
                      onClick={() => setCeoApproval(false)}
                      className={`ceoButtonHover ${!ceoApproval ? 'ceoButtonOnSelect' : ''}`}
                      type="button"
                      style={{
                        borderTopRightRadius: '40px',
                        borderBottomRightRadius: '40px',
                        width: '245px',
                        height: '50px',
                        marginLeft: '-35px',
                        fontWeight: 'bold',
                        fontSize: 'large',
                      }}
                    >
                      NON
                    </button>
                  </div>
                  <hr style={{ marginTop: '35px' }} />

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Typography
                      style={{
                        marginTop: '15px',
                        fontWeight: 'bold',
                        fontSize: '1.25em',
                        lineHeight: '1.25',
                        marginBottom: '0.5rem',
                      }}
                    >
                      S'il vous plaît aider à répondre à ces questions sur
                      {' '}
                      {companyName}
                    </Typography>
                    <p style={{ fontWeight: 'bold', color: '#666' }}>
                      Comment se préparer à un entretien chez
                      {' '}
                      {companyName}
                      ?
                    </p>
                    <TextField
                      sx={{ width: '550px' }}
                      multiline
                      rows={5}
                      placeholder="Écrivez votre réponse ici"
                      value={tips}
                      onChange={(event) => setTips(event.target.value)}
                    />
                  </div>

                  <hr style={{ marginTop: '35px' }} />

                  {isLoading ? <CircularProgress />
                    : (
                      <button
                        className="reviewSubmitButton"
                        type="submit"
                        style={{
                          marginTop: '25px',
                          borderRadius: '40px',
                          width: '245px',
                          height: '60px',
                          fontWeight: 'bold',
                          fontSize: 'large',
                        }}
                      >
                        Soumettre
                      </button>
                    )}
                </div>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
