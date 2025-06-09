import { SortOffersType } from './const';
import { CityOffer, OfferList } from './types/offer';
import { SortOffer } from './types/sort';

function getCity(name: string, cities: CityOffer[]): CityOffer | undefined {
  return cities.find((city) => city.name === name);
}

function getOffersByCity(city: string | undefined, offers: OfferList[]): OfferList[] {
  return offers.filter((offer) => offer.city.name === city);
}

function sortOffersByType (offers: OfferList[], type: SortOffer): OfferList[] {
  switch (type) {
    case SortOffersType.PriceToHigh:
      return offers.sort((a, b) => a.price - b.price);
    case SortOffersType.PriceToLow:
      return offers.sort((a, b) => b.price - a.price);
    case SortOffersType.TopRated:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}

export { getCity, getOffersByCity, sortOffersByType };