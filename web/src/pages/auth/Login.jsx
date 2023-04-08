/* eslint-disable no-console */
// Import packages
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { validate as validateEmail } from 'email-validator';
import jwt from 'jwt-decode';
// import toast de 'react-hot-toast';
// import Cookies de 'universal-cookie';
import { setCookie } from 'react-use-cookie';
import toast from 'react-hot-toast';

// Import fichiers
import './css/Login.css';
import { useDispatch } from 'react-redux';
import { images } from '../../assets/constants';
import Input from '../../components/Input';
import login from '../../api/auth/login';
import Button from '../../components/Button';
import {
  loginRequest, loginFailure, loginSuccess, compamny,
} from '../../app/actions';
import getEmployerByID from '../../api/employer/get';
import getLoginDetails from '../../utils/getLoginDetails';

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars

  const [email, setEmail] = useState('');
  const [emailIsVisited, setEmailIsVisited] = useState(false);
  const [emailHasError, setEmailHasError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState('');
  const emailShouldShowError = !emailHasError && emailIsVisited;

  const [password, setPassword] = useState('');
  const [passwordIsVisited, setPasswordIsVisited] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const passwordShouldShowError = !passwordHasError && passwordIsVisited;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/;

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailHasError(validateEmail(e.target.value));
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordHasError(passwordRegex.test(e.target.value));
  };

  useEffect(() => {
    const decoded = getLoginDetails();
    if (decoded) {
      if (decoded.role === 'user') {
        history.push('/');
      } else if (decoded.role === 'employer') {
        history.push('/employee/dashboard');
      } else if (decoded.role === 'admin') {
        history.push('/admin/reviews');
      }
    }
  }, []);

  useEffect(() => {
    if (passwordShouldShowError) {
      setPasswordErrorText('Entrer un mot de passe valdide! ');
    } else {
      setPasswordErrorText('');
    }
  }, [passwordShouldShowError]);

  useEffect(() => {
    if (emailShouldShowError) {
      setEmailErrorText('Entrer une adresse mail valdide!');
    } else {
      setEmailErrorText('');
    }
  }, [emailShouldShowError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailShouldShowError && passwordShouldShowError) {
      return;
    }
    const payload = { email, password };

    login(payload)
      .then(async (response) => {
        dispatch(loginRequest());
        if (response === null || response === undefined) {
          return;
        }
        setCookie('token', response.data.token, { path: '/' });
        const user = await jwt(response.data.token);
        dispatch(loginSuccess({
          loggedIn: true,
          id: user.id,
          email,
          role: user.role,
        }));
        if (user.role === 'user') {
          history.push('/');
        } else if (user.role === 'employer') {
          const employer = await getEmployerByID(user.id);
          if (!employer) {
            toast.error('Employeur introuvable. Veuillez enregistrer votre entreprise!');
            return;
          }
          await dispatch(compamny(employer.data.company[0]));
          history.push('/employee/dashboard');
        } else {
          history.push('/admin/reviews');
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailure(err));
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f3f2f1',
      }}
    >
      <div
        style={{
          minHeight: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius: '30px 30px 30px 30px',
        }}
      >
        <div style={{
          justifyContent: 'center',
          display: 'flex',
        }}
        >
          <img
            className="logo"
            src={images.logo}
            alt="DATE Center Recrutement"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '470px',
            borderRadius: '10px 10px 10px 10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '432px',
              backgroundColor: 'white',
              padding: '20px',
              top: '-50px',
            }}
          >
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                lineHeight: '1.5',
                color: '#2d2d2d',
              }}
            >
              Se connecter
            </h2>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
              <Input
                label="Addresse Email  *"
                type="email"
                value={email}
                onChange={onEmailChange}
                required
                setIsVisited={setEmailIsVisited}
                isError={emailShouldShowError}
                errorText={emailErrorText}
              />
              <Input
                label="Mot de passe *"
                type="password"
                value={password}
                onChange={onPasswordChange}
                required
                setIsVisited={setPasswordIsVisited}
                isError={passwordShouldShowError}
                errorText={passwordErrorText}
              />
              <div style={{ marginTop: '20px', marginBottom: '30px' }}>
                <Button label="Se connecter" type="submit" />
              </div>
            </form>
            <div style={{ display: 'flex', flexDirection: 'row', width: '450px' }}>
              <hr className="LRlin" />
              <span className="LRor">ou</span>
              <hr className="LRlin" />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Link to="/register">
                <p className="LRlink">Etes-vous nouveau? Créer votre compte</p>
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: '30px',
            height: '1rem',
            fontSize: '1.1rem',
            color: '#2557a7',
            cursor: 'pointer',
          }}
        />
      </div>
    </div>
  );
};

export default Login;
