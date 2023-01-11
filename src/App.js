import {Route,Routes} from 'react-router-dom';

import AllPostsPage from './pages/AllPosts';
import NewPostPage from './pages/NewPost';
import FavoritesPage from './pages/Favorites';
import AboutMePage from './pages/AboutMe';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';
function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path='/' element={<AllPostsPage />} />
        <Route path='/new-post' element={<NewPostPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/about-me' element={<AboutMePage />} />
      </Routes>
      
    </Layout>
    
  );
}

export default App;
