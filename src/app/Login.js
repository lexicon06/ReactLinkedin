import {React, useState} from 'react'
import { useDispatch } from 'react-redux';
import "./Login.css";
import { login } from '../features/userSlice';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const dispatch = useDispatch();
  

  const register = () => {

    if(!name){
      return alert("please name yourself");
    }

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name,
      photoUrl: profilePicture,
    }).then(() => {
      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: name,
          photoUrl: profilePicture,
        })
      );
    });
  });


  };

  
  const loginToApp = (e) => {
    e.preventDefault();
  
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        console.log(errorCode,errorMessage);
      });
  };
  

  const check = (value) => {
   // alert(value);
  }


  return (
    <div className="login">
      <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png" alt="Logo" />

      <form>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name (required if registering)" type="text" />
      <input value={profilePicture} onChange={e=>setProfilePicture(e.target.value)} placeholder="Profile pic URL (optional)" type="text" />
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type='email'/>
      <input value={password} onChange={(e) => {setPassword(e.target.value);check(e.target.value);}} placeholder="Password" type='password'/>
      <button onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member?
        <span className="login__register" onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login