import React from 'react';
import FacebookPost from './container/facebook-post';
import Timeline from './container/timeline';
import { useLocalStorageState } from './utils/use-local-storage';
import {stateHook} from './utils/state-hook';


function App() {
  const [posts, updatePosts] = useLocalStorageState('posts');
  const {savePost, updateComments, updateLikes} = stateHook(posts, updatePosts);
  
  return (
    <div className="App">
      <FacebookPost savePost={savePost}/>
      <Timeline posts={posts} updateComments={updateComments} updateLikes={updateLikes}/>      
    </div>
  );
}

export default App;
