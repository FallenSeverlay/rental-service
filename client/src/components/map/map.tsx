import { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';
import { OfferList, CityOffer } from '../../types/offer';

type MapProps = {
    city: CityOffer;
    offers: OfferList[];
};

const defaultIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

function Map({ city, offers }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      offers.forEach((offer) => {
        L.marker([offer.location.latitude, offer.location.longitude], {
          icon: defaultIcon,
        })
          .addTo(map)
          .bindPopup(offer.title);
      });
    }
  }, [map, offers]);

  return <div className="cities__map map" ref={mapRef} style={{ height: '100%' }} />;
}

export default Map;