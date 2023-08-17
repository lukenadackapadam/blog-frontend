/* eslint-disable react/prop-types */
import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props);

  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      Search filter:
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      {props.posts
        .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
          <div key={post.id} className="posts">
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} />
            <br />
            <button onClick={() => props.onShowPost(post)}>More info</button>
          </div>
        ))}
    </div>
  );
}
