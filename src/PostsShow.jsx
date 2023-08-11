/* eslint-disable react/prop-types */
export function PostsShow(props) {
  return (
    <div id="posts-show">
      <p>{props.post.body}</p>
    </div>
  );
}
