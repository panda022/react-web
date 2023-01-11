import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import PostList from '../components/posts/PostList';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <PostList posts={favoritesCtx.favorites} />;
  }
    return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
    );
}

export default FavoritesPage;