import { Paper, Button } from "@material-ui/core";
import React from "react";
import PostComments from "./post-comments";
import NewComment from "./new-comment";
const Timeline = ({ posts, updateComments, updateLikes }) => {
  return (
    <div>
      {posts.map((post) => (
        <Paper key={post.id} style={{ margin: 10, padding: 10 }}>
          <h3>Admin</h3>
          <bold>{post.content}</bold>
          <div>
            {post.likesCount > 0 && `${post.likesCount} people Liked`}
            <Button variant="contained" onClick={() => updateLikes(post.id)}>
              Like
            </Button>
          </div>
          <hr />
          <PostComments comments={post.comments} />
          <NewComment
            updateComments={(comment) => updateComments(post.id, comment)}
          />
        </Paper>
      ))}
    </div>
  );
};

export default Timeline;
