import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, UserCredential, GoogleAuthProvider } from 'firebase/auth';

import ListOfTodo from './list';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7UomQVaZnYUAYMekpqudDL46Bkyls2XA",
    authDomain: "carefinder-65852.firebaseapp.com",
    projectId: "carefinder-65852",
    storageBucket: "carefinder-65852.appspot.com",
    messagingSenderId: "553486391919",
    appId: "1:553486391919:web:45683b1b0bcb8cce7c8b9a",
    measurementId: "G-ZJ1PK0VE1H"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get the auth instance

function Apps() {
  const [authState, setAuthState] = useState<boolean>(
    false || window.localStorage.getItem('auth') === 'true'
  );
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user:any) => {
      if (user) {
        setAuthState(true);
        window.localStorage.setItem('auth', 'true');
        user.getIdToken()
          .then((idToken: string) => {
            setToken(idToken);
            console.log(user)
            console.log(idToken)
            console.log(token)
          })
          .catch((error:any) => {
            console.error("Error getting ID token:", error);
          });
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from the auth state change listener on unmount
    };
  }, []);

  const loginWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((userCred: UserCredential) => {
        if (userCred) {
          console.log(userCred)
          setAuthState(true);
          window.localStorage.setItem('auth', 'true');
        }
      })
      .catch((error:any) => {
        console.error("Error signing in with Google:", error);
      });
  };

  return (
    <div className="App">
      hello gyds
      {authState ? (
        <ListOfTodo token={token} />
      ) : (
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
    </div>
  );
}

export default Apps;
