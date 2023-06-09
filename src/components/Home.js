import { async } from '@firebase/util';
import { collection, deleteDoc, doc, DocumentSnapshot, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import "./Home.css";

function Home() {
  const [postList, setPostList] = useState([]);
  
  useEffect(() => {
    const getPosts = async() => {
        const data = await getDocs(collection(db, "posts"));
        // console.log(data);
        // console.log(data.log);
        // console.log(data.docs.map((doc) => ({doc})));
        // //ここの取り出し方は難しい
        // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id}))); 
    };
    getPosts();
    console.log(postList);
  }, []);


  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
          <div className="postHeader">
            <h1>{post.title}</h1>
          </div>
          <div className='postTextContents'>{post.postText}</div>
          <div className='nameAndDeletButton'>
            <h3>@{post.author.userName}</h3>
            {post.author.id === auth.currentUser?.uid && 
              (<button onClick={() => handleDelete(post.id)}>削除</button>)
            }
          </div>
        </div>
        );
      })}
    </div>
  )
}

export default Home