import {React, useEffect} from "react";
import "./App.css";
import Header from "./app/Header";
import Sidebar from "./app/Sidebar";
import Feed from "./app/Feed";
import Widget from "./app/Widget"
import { useDispatch, useSelector } from "react-redux";
import Login from "./app/Login";
import { login, logout, selectUser } from "./features/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //this will trigger only once and it will detect if we are logged in by using redux to check our firebase credentials

  useEffect(()=>{
    document.title="LinkedIn Clone";
    const auth = getAuth();
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // User is signed in
        // ...
        dispatch(login(
          {
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          }
        ))
      } else {
        // User is signed out
        // ...
        dispatch(logout({}))
      }
    });

  }, [dispatch]);

  
  return (
    <div className="app">
    
      <Header/>

      {!user ? <Login/>:(
        <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widget/>
      </div>
      )}

      
    </div>
  );
}

export default App;
