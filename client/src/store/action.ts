import { createAction } from "@reduxjs/toolkit";
import { CityOffer, OfferList } from "../types/offer";

const changeCity = createAction('offer/changeCity', (city: CityOffer) => ({
    payload: city
}));

const offersCityList = createAction('offer/offersCityList', (offers: OfferList[]) => ({
    payload: offers
}));

export { changeCity, offersCityList };