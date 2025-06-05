import { OfferList } from '../../types/offer';
import { CitiesCardList } from '../cities-card-list/cities-card-list';

type NearbyOffers = {
  offers: OfferList[];
};

export function NearbyOffersList({ offers }: NearbyOffers) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <CitiesCardList offersList={offers} />
      </div>
    </section>
  );
}