/* eslint-disable react/prop-types */
import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props);

  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      Search filter:
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles" />
      <datalist id="titles">
        {props.posts.map((post) => (
          <option key={post.id}>{post.title}</option>
        ))}
      </datalist>
      {props.posts
        .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
          <div key={post.id} className="posts, card">
            <img src={post.image} className="card-img-top" alt={post.title} />
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <br />
              <a>
                <button onClick={() => props.onShowPost(post)}>More info</button>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}
