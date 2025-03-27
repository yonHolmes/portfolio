import { navRoutes } from "@/consts/navigationConsts";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

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
    </SwipeableDrawer>
  )
}