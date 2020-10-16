import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

// Definindo o ícone de ponto no mapa
const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg, // Imagem do ícone
    iconSize: [58, 68], // Ajustando o tamanho do ícone em pixels
    iconAnchor:[29, 68], // Posição na imagem do ícone que identifica o ponto no mapa
    popupAnchor: [170, 2]
});

export default mapIcon;
