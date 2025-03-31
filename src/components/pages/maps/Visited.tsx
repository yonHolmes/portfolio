"use client"

import dynamic from "next/dynamic"
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { useIsClient, useScreen } from "usehooks-ts";
import { PropsMap } from "./components/map/Map";
import { Map } from "leaflet";
import { posBarcelona, posCheltenham, posReykjavik, posSydney } from "@/consts/mapConsts";

const MapWithNoSSR = dynamic(
  () => import("./components/map/Map").then((module: any) => module.MapExport),
  {
    ssr: false,
  }
) as unknown as React.ElementType<PropsMap>;

export function Visited() {
  
  const [map, setMap] = useState<Map | null>(null)

  const isClient = useIsClient();
  const screen = useScreen();
  const dimensionsKey = useMemo(() => {
    if (!isClient) {
      return "SERVER";
    }
    return `${screen.availWidth}_${screen.availHeight}`;
  }, [isClient, screen?.availWidth, screen?.availHeight]);
  
  const boxRef = useRef<HTMLElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    if (boxRef?.current) {
      setWidth(boxRef.current.getBoundingClientRect().width);
      setHeight(boxRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <Box>
      <Typography variant="h5">
        Visited
      </Typography>
      <Box ref={boxRef} width="95vw" height="70vh">
        {isClient &&
        <MapWithNoSSR
          key={dimensionsKey}
          width={width}
          height={height}
          setMap={(map) => setMap(map)}
        />}
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        gap={1}
        marginTop={1}
      >
        <Button
          variant="contained"
          onClick={() => map?.setView(posCheltenham, 11)}
        >
          Home
        </Button>
        
        <Button
          variant="outlined"
          onClick={() => map?.setView(posSydney, 3)}
        >
          Australia
        </Button>
        
        <Button
          variant="outlined"
          onClick={() => map?.setView(posReykjavik, 7)}
        >
          Iceland
        </Button>
        
        <Button
          variant="outlined"
          onClick={() => map?.setView(posBarcelona, 7)}
        >
          Spain
        </Button>
      </Box>
    </Box>
  )
}