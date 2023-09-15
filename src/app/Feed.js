import React, {useEffect, useState} from 'react';
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './inputOption';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from "firebase/firestore";
import FlipMove from "react-flip-move";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Feed() {
  const [input, setInput] = useState('');
  /*console.log("the collection",db.collection);*/



const [posts, setPosts] = useState([]);

const user = useSelector(selectUser);

const sendPost = async (e) => {
  e.preventDefault();
  const postsCollection = collection(db, "posts");
  await addDoc(postsCollection, {
    name: user.displayName,
    description: user.email,
    message: input,
    photoUrl: user.photoUrl || '',
    timeStamp: serverTimestamp()

  });



  setInput("");
}


useEffect(() => {
  const postsCollection = collection(db, "posts");
  const q = query(postsCollection, orderBy("timeStamp", "desc"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    setPosts(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  });
  return () => unsubscribe();
}, []);







  return (
    <div className="feed">
      
      <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon/>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                <button onClick={sendPost} type='submit'>Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} title="Photo" color="#7085F9" />
            <InputOption Icon={SubscriptionsIcon} title="Video" 
            color="#E7A33E"/>
            <InputOption Icon={EventNoteIcon} title="Event"
            color="#C0CBCD"/>
            <InputOption Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"/>
        </div>
      </div>

      <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
  <Post
    key={id}
    name={name}
    description={description}
    message={message}
    photoUrl={photoUrl}
  />

))}
</FlipMove>

    

      {/* <Post name='Pablo Santillan' description='Developer' message='Hello world' photoUrl='https://cdn-icons-png.flaticon.com/128/2202/2202112.png' /> */}
    </div>
  )
}

export default Feed