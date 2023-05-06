import React from 'react'

const Createpost = () => {
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className='inputPost'>
          <div>タイトル</div>
          <input type="text" placeholder="タイトルを記入"></input>
        </div>
        <div className='inputPost'>
          <div>投稿</div>
          <textarea placeholder="投稿内容を記入"></textarea>
        </div>
        <button className='postButton'>投稿する</button>
      </div>
    </div>
  )
};

export default Createpost