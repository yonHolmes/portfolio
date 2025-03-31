import {
  createSvgIcon,
  SvgIcon,
} from "@mui/material";
import { ComponentProps } from "react";

type PropsMdiMUIIcon = {
  name: string,
  path: string,
  svgProps?: ComponentProps<typeof SvgIcon>,
};

export function MdiMUIIcon({ name, path, svgProps }: PropsMdiMUIIcon) {
  const Icon = createSvgIcon(
    <path d={path} />,
    name,
  );

  return <Icon {...svgProps}/>;
}