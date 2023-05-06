import React from 'react';

function Home() {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
      </div>
      <div className='postTextContents'>
        今はReactの学習中です。
      </div>
      <div className='nameAndDeletButton'>
        <h3>@Umeda</h3>
        <button>削除</button>
      </div>

    </div>
  )
}

export default Home