import React, { useState } from "react";
import { Card, Button, TextField } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

const FacebookPost = ({ savePost }) => {
  const [post, setPost] = useState("");
  const save = () => {
    savePost({
      id: uuidv4(),
      content: post,
      comments: [],
      likesCount: 0,
    });
    setPost("");
  };
  return (
    <Card>
      <div>
        <TextField
          fullWidth
          value={post}
          name="post"
          onChange={(e) => setPost(e.target.value)}
        />
      </div>
      <Button variant="contained" color="primary" onClick={save}>
        Post
      </Button>
    </Card>
  );
};

export default FacebookPost;
