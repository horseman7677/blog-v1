import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1639502003030-34c1d317e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum, dolor sit amet consectetur.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Rahul</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          consequuntur provident. Earum consequatur voluptate, praesentium
          repudiandae quod optio eius ratione quis voluptates dignissimos ipsum
          in cumque numquam, soluta quisquam consectetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          consequuntur provident. Earum consequatur voluptate, praesentium
          repudiandae quod optio eius ratione quis voluptates dignissimos ipsum
          in cumque numquam, soluta quisquam consectetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          consequuntur provident. Earum consequatur voluptate, praesentium
          repudiandae quod optio eius ratione quis voluptates dignissimos ipsum
          in cumque numquam, soluta quisquam consectetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          consequuntur provident. Earum consequatur voluptate, praesentium
          repudiandae quod optio eius ratione quis voluptates dignissimos ipsum
          in cumque numquam, soluta quisquam consectetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          consequuntur provident. Earum consequatur voluptate, praesentium
          repudiandae quod optio eius ratione quis voluptates dignissimos ipsum
          in cumque numquam, soluta quisquam consectetur.
        </p>
      </div>
    </div>
  );
}
