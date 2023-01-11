import { useNavigate } from 'react-router-dom';
import NewPostForm from "../components/posts/NewPostForm";

function NewPostPage() {
    const navigate = useNavigate();
function addPostHandler(meetupData){
    fetch('https://react-getting-started-3e40b-default-rtdb.firebaseio.com/meetups.json',
    {
        method:'POST',
        body:JSON.stringify(meetupData),
        header:{
            'Content-Type':'appliacation/json'
         }
        }
    ).then(() =>{
        navigate('/');
    });
}

    return <section>
        <h1>Add New Post</h1>
        <NewPostForm onAddPost={addPostHandler}/>
    </section>;
}

export default NewPostPage;