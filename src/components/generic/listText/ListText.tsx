import { Box, Chip, Divider, Icon, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, useTheme } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

type PropsListText = {
  list: string[]
}

export function ListText({ list }: PropsListText) {
  if (!list.length) {
    console.log('No List');
    return null;
  }
  return (
    <List>
      {list.map((text, idx) => {
        return (
          <ListItem key={idx}>
            <ListItemIcon  > 
              <CircleIcon color="primary" fontSize="small" sx={{ marginBlockEnd: 0 }}/>
            </ListItemIcon>
            <ListItemText>
              {text}
            </ListItemText>
          </ListItem>
        )
      })}
    </List>
  )
}