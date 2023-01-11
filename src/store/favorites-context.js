import { createContext,useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorits: 0,
    addFavorite:(favoriteMeetup) => {},
    removeFavorite:(meetupId) =>{},
    itemIsFavorite:(meetupId) => {}
});

export function FavoritesContextProvider(props){
    const [useFavorites,setUserFavorites] = useState([]);
    function addFavoritesHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }
    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }
    function itemIsFavoriteHandler(meetupId) {
        return useFavorites.some(meetup=>meetup.id === meetupId)
    }
    const context = {
        favorites:useFavorites,
        totalFavorites:useFavorites.length,
        addFavorite:addFavoritesHandler,
        removeFavorite:removeFavoriteHandler,
        itemIsFavorite:itemIsFavoriteHandler
    }

    return(
        <FavoritesContext.Provider value={context}>
         {props.children}
       </FavoritesContext.Provider>
    );
}

export default FavoritesContext;