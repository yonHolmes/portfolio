
import { useState, useEffect } from "react";
import NextImage from "next/image";
import { Skeleton } from "@mui/material";
import { useIsClient } from "usehooks-ts";

type PropsImageClient = React.ComponentProps<typeof NextImage> & {
  widthSkeleton?: React.ComponentProps<typeof Skeleton>["width"],
  heightSkeleton?: React.ComponentProps<typeof Skeleton>["height"],
}

export function ImageClient(props: PropsImageClient) {
  
  const isClient = useIsClient();
  
  const {
    widthSkeleton,
    heightSkeleton,
    ...rest
  } = props;

  if (!isClient) {
    return <Skeleton variant="rectangular" width={widthSkeleton ?? 210} height={heightSkeleton ?? 60} />;
  }
  return (
    <NextImage
      data-custom-name="ImageClient"
      {...rest}
    />
  )
}

export function ImageAuto(props: PropsImageClient) {
  return (
    <ImageClient
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }} // optional
      {...props}
    />
  )
}