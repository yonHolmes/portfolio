import {
  Chip,
} from "@mui/material";

type PropsListChip = {
  icon: React.ComponentProps<typeof Chip>["icon"],
  label: React.ComponentProps<typeof Chip>["label"],
}

export function ListChip({ label, icon }: PropsListChip) {
  return (
    <Chip
      color="secondary"
      icon={icon}
      label={label}
    />
  )
}