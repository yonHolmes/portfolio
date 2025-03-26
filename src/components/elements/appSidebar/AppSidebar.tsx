import { navRoutes } from "@/consts/navigationConsts";
import { useBreakpoints } from "@/context/useBreakpoints";
import { Box, List, ListItem, SwipeableDrawer } from "@mui/material";
import { useRouter } from "next/navigation";


type PropsAppSidebar = {
  open: boolean,
  onOpen: () => void,
  onClose: () => void,
}

const routes = [
  {
    path: navRoutes.projects().path,
    label: 'Projects',
  },
  {
    path: navRoutes.softSkills().path,
    label: 'Soft Skills',
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
          {routes.map(({ path, label }) =>
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
              tabIndex={0}
            >
              {label}
            </ListItem>
          )}
        </List>
      </Box>
    </SwipeableDrawer>
  )
}