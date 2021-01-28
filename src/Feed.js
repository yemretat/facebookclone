import React,{useState,useEffect} from "react";
import StoryReel from "./StoryReel";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post"
import db from "./firebase"
const Feed = () => {
  const [posts,setPosts]=useState([])
  /*Anything updated changed etc. in cloud firestore collection
  it will give us real time snapshot when you get realtime(always listen changes) snapshot 
  update the post setPost with only 3 line code*/
  useEffect(() =>{
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ({id:doc.id,data:doc.data() })))
    ))  
      console.log(posts);
  },[])
  debugger;
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {
        posts.map((post)=> (
          <Post 
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}/>
        ))
      }

    </div>
  );
};

export default Feed;
