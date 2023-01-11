import { useContext } from 'react';
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Pan Gong's Website</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Posts</Link>
                    </li>
                    <li>
                        <Link to='/new-post'>New Post Page</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            My Favorites
                            <span className={classes.badge}>
                                {favoritesCtx.totalFavorites}
                            </span>
                            </Link>
                    </li>
                    <li>
                        <Link to='/about-me'>Abou Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;