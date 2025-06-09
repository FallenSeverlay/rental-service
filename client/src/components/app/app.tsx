import { JSX } from "react";
import { MainPage } from "../../pages/main-page/main-page";
import { EmptyPage } from "../../pages/empty-page/empty-page";
import { FavoritesPage } from "../../pages/favorites-page/favorites-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { OfferPage } from "../../pages/offer-page/offer-page";
import { AppRoute, AuthorizationStatus, } from "../../const";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer, OfferList } from "../../types/offer";
import { offersList } from "../../mocks/offers-list";

type AppMainPageProps = {
    rentalOffersCount: number;
    offersList: OfferList[];
    offers: FullOffer[];
}

function App({rentalOffersCount, offers}: AppMainPageProps): JSX.Element {
    return(
      <>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" />
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" />
          </symbol>
        </svg>
      </div>

        <BrowserRouter>
        <Routes>
        
        <Route path='*' element={<EmptyPage/>}/>
        <Route path={AppRoute.Main} element={<MainPage/>}/>
        <Route
            path={ AppRoute.Favorites }
            element={
              <PrivateRoute authorizationStatus={ AuthorizationStatus.Auth }>
                <FavoritesPage offers = {offers}/>
              </PrivateRoute>
            }
        />

        <Route path={AppRoute.Login} element={<LoginPage/>}/>
        <Route path={ `${AppRoute.Offer}/:id` } element={<OfferPage offers={offers}/>}/>
        
        </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;