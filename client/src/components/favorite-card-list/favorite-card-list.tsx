import FavoriteCard from '../favorite-card/favorite-card';
import { FullOffer } from '../../types/offer';

type FavoriteCardListProps = {
  offers: FullOffer[];
};

function FavoriteCardList({ offers }: FavoriteCardListProps) {
  const offersByCity = offers.reduce<Record<string, FullOffer[]>>((acc, offer) => {
    acc[offer.city.name] = acc[offer.city.name] || [];
    acc[offer.city.name].push(offer);
    return acc;
  }, {});

  return (
    <ul className="favorites__list">
      {Object.entries(offersByCity).map(([city, cityOffers]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <span className="locations__item-link">{city}</span>
            </div>
          </div>
          <div className="favorites__places">
            {cityOffers.map((offer) => (
              <FavoriteCard key={offer.id} offer={offer} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoriteCardList;