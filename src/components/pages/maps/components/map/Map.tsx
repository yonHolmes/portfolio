"use client"


import { useIsClient } from "usehooks-ts";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Circle,
  Tooltip,
  useMap,
} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple, Map } from 'leaflet';
import {
  Box,
  SvgIconProps,
  Typography,
} from "@mui/material";

import { Dispatch, ReactNode, SetStateAction } from "react";
import HotTubIcon from '@mui/icons-material/HotTub';
import ShowerIcon from '@mui/icons-material/Shower';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import SailingIcon from '@mui/icons-material/Sailing';
import VolcanoIcon from '@mui/icons-material/Volcano';
import {
  mdiCat,
  mdiAurora,
} from '@mdi/js/';
import { HomeMarker } from "./components/Markers";
import { MdiMUIIcon } from "@/components/generic/icon/MdiMUIIcon";
import { posBarcelona, posCheltenham, posReykjavik, posSydneyHarborBridge, posUluru } from "@/consts/mapConsts";

// https://github.com/SrSurajithPranav/SrSurajithPranav2/blob/c693ae4dd3a3638794155a8e0aab86e32410352c/MapComponent.js#L15
// Fix default icon issue with React-Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

type BasicMarker = {
  latLong: LatLngTuple,
  content: ReactNode,
  icon?: L.Icon,
};

const iconProps: SvgIconProps = {
  fontSize: 'small',
  style: {
    marginRight: '12px',
  },
}

// If decide to move this to a const; make the const TSX
const basicMarkers: BasicMarker[] = [
  {
    latLong: posCheltenham,
    content: 'I live in Cheltenham',
    icon: HomeMarker,
  },
  {
    latLong: posReykjavik,
    content: (
      // 100% MW: Prevent break-out of parent container
      // 60vw Width: Prevent being too big on the map (mobile)
      <Box width="60vw" maxWidth="100%">
        <Typography>Holiday to Iceland, where we saw/went to:</Typography>
        {[
          {
            text: 'Sky Lagoon',
            icon: <HotTubIcon {...iconProps}/>
          },
          {
            text: 'Erupting Gysers',
            icon: <ShowerIcon {...iconProps}/>
          },
          {
            text: 'Gullfoss Waterfall',
            icon: <WaterfallChartIcon {...iconProps}/>
          },
          {
            text: `Sprunga Opnast, or "A Fissure Opens Up"; the Almannagja Fault`,
            icon: <BrokenImageIcon {...iconProps}/>
          },
          {
            text: 'Cat Cafe',
            // icon: <HotTubIcon {...iconProps}/>
            // icon: <MdiIcon path={mdiCat}/>
            icon: <MdiMUIIcon name="Cat" path={mdiCat} svgProps={iconProps}/>
          },
          {
            text: 'Saw the Northern Lights',
            icon: <MdiMUIIcon name="Aurora" path={mdiAurora} svgProps={iconProps}/>
          },
          {
            text: 'Whale Museum, and saw Humback Whales',
            icon: <SailingIcon {...iconProps}/>
          },
          {
            text: 'Indoor Lava Show',
            icon: <VolcanoIcon {...iconProps}/>
          },
        ].map(({ text, icon }) =>
          <Typography
            key={text}
            margin="0"
            variant="caption"
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: 0,
              marginTop: 12,
            }}
          >
            {icon} {text} 
          </Typography>
        )}
            
      </Box>
    ),
  },
  {
    latLong: posBarcelona,
    content: 'We enjoy the occasional holiday to Spain',
  },
  {
    latLong: posSydneyHarborBridge,
    content: 'Climbed the Sydney Harbor Bridge & stayed the night in Taronga Zoo',
  },
  {
    latLong: posUluru,
    content: 'Saw Uluru',
  }
]

export type PropsMap = {
  width: number,
  height: number,
  setMap: (map: Map) => void,
}

// Needs to be default, for the dynamic/lazy loads to work
export function MapExport(props: PropsMap) {
  const {
    width,
    height,
    setMap,
  } = props;

  const isClient = useIsClient();

  console.log(`Map height ${height}, width ${width}`);

  if (!height || !width || !isClient) {
    return <p>Loading...</p>;
  }

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2}
      scrollWheelZoom
      ref={setMap}
      style={{
        height,
        width,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {basicMarkers.map(({ latLong, content, icon }) => {
        if (icon) {
          return (
            <Marker
              key={latLong.join('_')}
              icon={icon}
              position={latLong}
              
            >
              <Popup>
                {content}
              </Popup>
            </Marker>
          )
        }
        return (
          <Marker key={latLong.join('_')} position={latLong}>
            <Popup>
              {content}
            </Popup>
          </Marker>
        )
      })}

      
      <Circle
        center={posCheltenham}
        radius={16093.4 /* meters */}
      >
        <Tooltip
          position={posCheltenham}
          content="Approximate max commute<br />for non-remote employment"
        >
        </Tooltip>
      </Circle>
    </MapContainer>
  );
}