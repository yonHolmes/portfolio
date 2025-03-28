import { navRoutes } from "@/consts/navigationConsts";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CloseIcon from '@mui/icons-material/Close';

type PropsAppSidebar = {
  open: boolean,
  onOpen: () => void,
  onClose: () => void,
}

type Route = {
  icon?: ReactNode,
  label: string,
  path: string,
}

const routes: Route[] = [
  {
    label: 'Home',
    path: navRoutes.home().path,
    icon: <HomeIcon/>,
  },
  {
    label: 'Projects',
    path: navRoutes.projects().path,
    icon: <EngineeringIcon/>,
  },
  {
    label: 'Soft Skills',
    path: navRoutes.softSkills().path,
    icon: <ConnectWithoutContactIcon/>
  },
];

export function AppSidebar(props: PropsAppSidebar) {
  const {
    open,
    onOpen,
    onClose,
  } = props;
  
  const {
    palette: {
      text: {
        secondary: textSecondary,
      }
    }
  } = useTheme();

  const {
    isMobile,
  } = useBreakpoints();

  const router = useRouter();
  function handleNav(path: string) {
    router.push(path);
    onClose();
  }
  
  return (
    <SwipeableDrawer
      open={open}
      onOpen={onOpen}
      onClose={onClose}
    >
      <Box
        width={isMobile ? '100vw' : '30vw'}
        maxWidth={isMobile ? 'initial' : '300px'}
      >
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            padding={({ spacing }) => spacing(1, 3, 1, 0)}
            borderBottom="1px solid"
          >
            <IconButton onClick={onClose}>
              <CloseIcon/>
            </IconButton>
          </Box>
          <List>
            {routes.map(({ path, label, icon }) =>
              /*
              We're using handleNav here so that
              we can close the Drawer after the Click
              */
              <ListItem
                key={label}
                onClick={() => handleNav(path)}
                style={{
                  cursor: 'pointer',
                  color: textSecondary,
                }}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText>
                    {label}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </Box>
      </Box>
    </SwipeableDrawer>
  )
}