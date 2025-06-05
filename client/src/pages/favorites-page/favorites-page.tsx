import FavoriteCardList from '../../components/favorite-card-list/favorite-card-list';
import { Logo } from '../../components/logo/logo';
import { FullOffer } from '../../types/offer';

type FavoritesPageProps = {
  offers: FullOffer[];
};

function FavoritesPage({ offers }: FavoritesPageProps) {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    
    <main className="page__main page__main--favorites">
        <header className="header">
            <div className="container">
            <div className="header__wrapper">
                <div className="header__left">
                    <Logo/>
                </div>
                <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Myemail@gmail.com</span>
                        <span className="header__favorite-count">3</span>
                    </a>
                    </li>
                    <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
            </div>
      </header>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteCardList offers={favoriteOffers} />
        </section>
      </div>
    </main>
  );
}

export { FavoritesPage };