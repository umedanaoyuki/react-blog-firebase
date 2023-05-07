import { async } from '@firebase/util';
import { collection, doc, DocumentSnapshot, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { db } from '../firebase';
import "./Home.css";

function Home() {

  useEffect(() => {
    const getPosts = async() => {
        const data = await getDocs(collection(db, "posts"));
        console.log(data);

        console.log(data.log);
        console.log(data.docs.map((doc) => ({doc})));
        console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getPosts();
  }, []);

  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className='postTextContents'>
          今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。今はReactの学習中です。
        </div>
        <div className='nameAndDeletButton'>
          <h3>@Umeda</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  )
}

export default Home