/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Typography } from '@mui/material';
import HappyEmojiSVG from '../../../components/svg/HappyEmojiSVG';
import VeryHappyEmojiSVG from '../../../components/svg/VeryHappyEmojiSVG';
import SadEmojiSVG from '../../../components/svg/SadEmojiSVG';
import Button from '../../../components/Button';

function WorkHappiness(props) {
  return (
    <>
      <Typography
        style={{
          marginTop: '15px',
          fontWeight: 'bold',
          fontSize: '1.75rem',
          lineHeight: '1.25',
          marginBottom: '0.5rem',
        }}
      >
        Bonheur au travail
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <p style={{ fontSize: '.875rem', lineHeight: '1.5', color: '#595959' }}>
          Scores basés sur les réponses des clients à l'enquête de DATE Center Recrutement
          sur le bonheur au travail.
        </p>
        <Button
          label="Apropos du bonheur au travail"
          style={{
            width: '200px',
            backgroundColor: 'white',
            color: '#2557a7',
            border: '1px solid #d4d2d0',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Average happiness score */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#f3f2f1',
                  boxSizing: 'border-box',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  borderRadius: '0.5rem',
                  lineHeight: '1.5',
                  padding: '.25rem .75rem',
                }}
              >
                {props && props.data ? (
                  props.data.workLifeBalance ? (
                    Math.ceil(props.data.workLifeBalance * 20)
                  ) : (
                    <span style={{ fontSize: '0.7rem' }}>NA</span>
                  )
                ) : (
                  <span style={{ fontSize: '0.7rem' }}>NA</span>
                )}
              </div>
              {props
              && props.data
              && props.data.workLifeBalance
              && Math.ceil(props.data.workLifeBalance * 20) > 80 ? (
                <VeryHappyEmojiSVG />
                ) : Math.ceil(props.data.workLifeBalance * 20) > 65 ? (
                  <HappyEmojiSVG />
                ) : (
                  <SadEmojiSVG />
                )}

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '15px',
                }}
              >
                <p style={{ fontWeight: '700' }}>Score du bonheur au travail</p>
                <p
                  style={{
                    fontSize: '.875rem',
                    color: '#595959',
                    marginTop: '-12px',
                  }}
                >
                  Moyenne
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'white',
                color: 'rgb(89,89,89)',
                border: '1px solid rgb(212, 210, 208)',
                padding: '.5rem 1rem',
                fontSize: '0.875rem',
                width: '80%',
                borderRadius: '0.5rem',
              }}
            >
              Les gens se sentent-ils heureux la plupart du temps?
            </div>
          </div>
        </div>
        {/* Learning score */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#f3f2f1',
                  boxSizing: 'border-box',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  borderRadius: '0.5rem',
                  lineHeight: '1.5',
                  padding: '.25rem .75rem',
                }}
              >
                {props && props.data ? (
                  props.data.jobCulture ? (
                    Math.ceil(props.data.jobCulture * 20)
                  ) : (
                    <span style={{ fontSize: '0.7rem' }}>NA</span>
                  )
                ) : (
                  <span style={{ fontSize: '0.7rem' }}>NA</span>
                )}
              </div>
              {props
              && props.data
              && props.data.jobCulture
              && Math.ceil(props.data.jobCulture * 20) > 80 ? (
                <VeryHappyEmojiSVG />
                ) : Math.ceil(props.data.jobCulture * 20) > 65 ? (
                  <HappyEmojiSVG />
                ) : (
                  <SadEmojiSVG />
                )}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '15px',
                }}
              >
                <p style={{ fontWeight: '700' }}>Note d'apprentissage </p>
                <p
                  style={{
                    fontSize: '.875rem',
                    color: '#595959',
                    marginTop: '-12px',
                  }}
                >
                  Moyenne
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'white',
                color: 'rgb(89,89,89)',
                border: '1px solid rgb(212, 210, 208)',
                padding: '.5rem 1rem',
                fontSize: '0.875rem',
                width: '80%',
                borderRadius: '0.5rem',
              }}
            >
              Les gens se sentent-ils heureux la plupart du temps?
            </div>
          </div>
        </div>
        {/* Appreciation score */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#f3f2f1',
                  boxSizing: 'border-box',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  borderRadius: '0.5rem',
                  lineHeight: '1.5',
                  padding: '.25rem .75rem',
                }}
              >
                {props && props.data ? (
                  props.data.compensation ? (
                    Math.ceil(props.data.compensation * 20)
                  ) : (
                    <span style={{ fontSize: '0.7rem' }}>NA</span>
                  )
                ) : (
                  <span style={{ fontSize: '0.7rem' }}>NA</span>
                )}
              </div>
              {props
              && props.data
              && props.data.compensation
              && Math.ceil(props.data.compensation * 20) > 80 ? (
                <VeryHappyEmojiSVG />
                ) : Math.ceil(props.data.compensation * 20) > 65 ? (
                  <HappyEmojiSVG />
                ) : (
                  <SadEmojiSVG />
                )}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '15px',
                }}
              >
                <p style={{ fontWeight: '700' }}>Note d'Appreciation</p>
                <p
                  style={{
                    fontSize: '.875rem',
                    color: '#595959',
                    marginTop: '-12px',
                  }}
                >
                  Moyenne
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'white',
                color: 'rgb(89,89,89)',
                border: '1px solid rgb(212, 210, 208)',
                padding: '.5rem 1rem',
                fontSize: '0.875rem',
                width: '80%',
                borderRadius: '0.5rem',
              }}
            >
              Les gens se sentent-ils heureux la plupart du temps?
            </div>
          </div>
        </div>
      </div>

      <p style={{ marginTop: '30px', color: '#2557a7' }}>Voir le rapport complet</p>
    </>
  );
}

export default WorkHappiness;
