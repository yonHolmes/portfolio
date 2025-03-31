import { navRoutes } from "@/consts/navigationConsts";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MapIcon from '@mui/icons-material/Map';
import CloseIcon from '@mui/icons-material/Close';
import { AppSearchBox } from "../appSearchBox/AppSearchBox";
import { Contact } from "../contact/Contact";

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
    icon: <HomeIcon color="primary"/>
  },
  {
    label: 'Projects',
    path: navRoutes.projects().path,
    icon: <EngineeringIcon color="primary"/>,
  },
  {
    label: 'Soft Skills',
    path: navRoutes.softSkills().path,
    icon: <ConnectWithoutContactIcon color="primary"/>
  },
  {
    label: 'Visited Locations',
    path: navRoutes.visited().path,
    icon: <MapIcon color="primary"/>
  }
];

export function AppSidebar(props: PropsAppSidebar) {
  const {
    open,
    onOpen,
    onClose,
  } = props;
  
  const {
    spacing,
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
            justifyContent={isMobile ? 'space-between' : 'flex-end'}
            alignItems="center"
            padding={({ spacing }) => spacing(1, 3, 1, 1)}
            borderBottom="1px solid"
          >
            {isMobile &&
            <AppSearchBox
              iconPosition="start"
              disableUnderline
              onNavigate={onClose}
              sx={isMobile ? {
                maxWidth: '70vw',
              } : null}
            />
            }

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

        <Contact
          box={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            padding: spacing(1, 1, 2, 1),
          }}
        />
      </Box>
    </SwipeableDrawer>
  )
}