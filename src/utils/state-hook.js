const stateHook = (posts, updatePosts) => {
  const savePost = (newPost) => {
    updatePosts([...posts, newPost]);
  };
  const updateComments = (postId, comment) => {
    let index = posts.findIndex((post) => post.id === postId);
    if (index >= 0) {
      let updatedPost = {
        ...posts[index],
        comments: [...posts[index].comments, comment],
      };
      updatePosts([
        ...posts.slice(0, index),
        updatedPost,
        ...posts.slice(index + 1, posts.length),
      ]);
    }
  };
  const updateLikes = (postId) => {
    let index = posts.findIndex((post) => post.id === postId);
    if (index >= 0) {
      let updatedPost = {
        ...posts[index],
        likesCount: posts[index].likesCount + 1,
      };
      updatePosts([
        ...posts.slice(0, index),
        updatedPost,
        ...posts.slice(index + 1, posts.length),
      ]);
    }
  };
  return { savePost, updateLikes, updateComments };
};

export { stateHook };
