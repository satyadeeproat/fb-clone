import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewComment = ({ updateComments }) => {
  const [textComment, updateTextComment] = useState("");
  const save = () => {
    updateComments({
      id: uuidv4(),
      content: textComment,
    });
    updateTextComment("");
  };
  return (
    <div>
      <TextField
        width={200}
        variant="outlined"
        onChange={(e) => updateTextComment(e.target.value)}
        name="comment"
      />
      <Button
        onClick={save}
        variant="contained"
        color="primary"
        disabled={textComment === ""}
      >
        Save
      </Button>
    </div>
  );
};

export default NewComment;
