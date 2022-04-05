import React from "react";
import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1604311359386-efa1bbcf3353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        architecto quaerat dignissimos provident. Adipisci facere quia quod
        excepturi alias praesentium atque nesciunt totam distinctio obcaecati
        tempore assumenda, non exercitationem sunt!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        architecto quaerat dignissimos provident. Adipisci facere quia quod
        excepturi alias praesentium atque nesciunt totam distinctio obcaecati
        tempore assumenda, non exercitationem sunt!
      </p>
    </div>
  );
}

export default Post;
