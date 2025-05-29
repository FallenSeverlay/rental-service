import { StrictMode } from 'react';
import App from "./components/app/app";
import ReactDOM from 'react-dom/client';
import { Settings } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<StrictMode>
    <App rentalOffersCount={Settings.rentOffersCount}/>
  </StrictMode>
);
