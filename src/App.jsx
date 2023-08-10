/* eslint-disable react/prop-types */

import axios from "axios";
import { useState, useEffect } from "react";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form action="">
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title" />
        <label htmlFor="body">Body: </label>
        <input type="text" id="body" name="body" />
        <label htmlFor="image">Image: </label>
        <input type="text" id="image" name="image" />
      </form>
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} alt={post.title} />
        </div>
      ))}
    </div>
  );
}

function Content() {
  // let posts = [];
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://127.0.0.1:3000/posts.json").then((response) => {
      console.log(response.data);
      // posts = response.data;
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsNew />
      {/* <button onClick={handleIndexPosts}>Load posts</button> */}
      <PostsIndex posts={posts} />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
