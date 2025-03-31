import { IMAGE_BASE_PATH } from '@/consts/appConsts';
import L from 'leaflet';
// import marker from '@/assets/images/map/HomeMarker.png';

const heightToWidthRatio = 50 / 82;
const height = 45;
const width = height * heightToWidthRatio;

const marker = `${IMAGE_BASE_PATH}/map/HomeMarker.png`;
export const HomeMarker = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -(height/2)],
    iconSize: [width, height],
    iconAnchor: [12.5, 41],
});