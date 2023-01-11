import { useState,useEffect } from 'react';
import PostList from '../components/posts/PostList';

function AllPostsPage() {
    const [isloading,setIsLoading] = useState(true);
    const [loadPosts,setLoadedPosts] = useState([]);
    useEffect(()=> {
      fetch('https://react-getting-started-3e40b-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data=>{
    const posts = [];
    for(const key in data) {
      const post = {
        id:key,
        ...data[key]
      };
      posts.push(post);
    }


      setIsLoading(false);
      setLoadedPosts(posts);
    });
    },[]);

    

    if(isloading) {
      return (
        <section>
          <p>Loading....</p>
        </section>
      );
    }

    return <section>
        <h1>All Posts</h1>
        {/* {[<li>Item1</li>,<li>Item2</li>]} */}
        {/* {DUMMY_DATA.map((meetup)=> {
            return <li key={meetup.id}>{meetup.title}</li>;
        })} */}
        <PostList posts={loadPosts}/>
    </section>;
}

export default AllPostsPage;