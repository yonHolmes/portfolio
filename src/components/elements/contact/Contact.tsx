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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { ComponentProps, useState } from "react";
import { ContactEmailDialog } from "./ContactEmailDialog";

type PropsContact = {
  box?: ComponentProps<typeof Box>,
}

export function Contact(props: PropsContact) {

  const [isEmailContactOpen, setIsEmailContactOpen] = useState(false);
  function handleOnOpenEmailContact() {
    setIsEmailContactOpen(true);
  }
  function handleOnCloseEmailContact() {
    setIsEmailContactOpen(false);
  }

  return (
    <>
      <Box
        {...props.box}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          gap={2}
        >
          <IconButton
            color="primary"
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yon-holmes-ba6a015a/"
              style={{
                height: '24px', // tag is otherwise 6px taller and throws off alignment
                color: 'inherit', // override the global disabling (initial)
              }}
            >
              <LinkedInIcon/>
            </a>
          </IconButton>

          <IconButton
            onClick={handleOnOpenEmailContact}
            color="primary"
          >
            <EmailIcon/>
          </IconButton>


        </Box>
      </Box>

      {/* Dialogs */}

      <ContactEmailDialog
        open={isEmailContactOpen}
        onClose={handleOnCloseEmailContact}
      />
    </>
  )
}