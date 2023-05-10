import React from 'react';
import './Login.scss';
import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';

const Login = () => {
  const signin = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message);
    });
  };

  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="ロゴ" />
      </div>

      <Button onClick={signin}>ログイン</Button>
    </div>
  );
};

export default Login;
