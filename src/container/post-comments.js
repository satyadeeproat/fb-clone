import { light } from "@material-ui/core/styles/createPalette";
import React from "react";

const PostComments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <p key={comment}>
          <light>
            {" "}
            <b>{`c${index}    `}</b>
            {comment.content}
          </light>
        </p>
      ))}
    </div>
  );
};

export default PostComments;
