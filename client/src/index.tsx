import { StrictMode } from 'react';
import App from "./components/app/app";
import ReactDOM from 'react-dom/client';
import { Settings } from './const';
import { offers } from './mocks/offers';
import { offersList } from './mocks/offers-list';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<StrictMode>
    <Provider store = { store }>
      <App rentalOffersCount={Settings.rentOffersCount} offers={offers} offersList={offersList}/>
    </Provider>
  </StrictMode>
);
