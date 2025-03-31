import { ComponentProps, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Snackbar,
  SnackbarCloseReason,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import { useCopyToClipboard } from "usehooks-ts";

type PropsContactEmailDialog = 
  ComponentProps<typeof Dialog>;

function MailButtons({ email }: { email: string }) {
  const [, copy] = useCopyToClipboard();
  
  const [isShowSnackbar, setIsShowSnackbar] = useState(false);
  function handleShowSnackbar() {
    setIsShowSnackbar(true);
  }
  function handleCloseSnackbar(
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) {
    if (reason === 'clickaway') {
      return;
    }
    setIsShowSnackbar(false);
  }

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        gap={5}
      >
        <IconButton
          color="primary"
        >
          <a
            target="_blank"
            href={`mailto:${email}`}
            style={{
              height: '24px', // tag is otherwise 6px taller and throws off alignment
              color: 'inherit', // override the global disabling (initial)
            }}
          >
            <EmailIcon/>
          </a>
        </IconButton>

        <IconButton
          onClick={async () => {
            try {
              await copy(email);
              handleShowSnackbar();
              console.log('Email copied to Clipboard');
            } catch (error) {
              console.log('Error copying email to clipboard', error);
            }
          }}
          color="primary"
        >
          <ContentCopyIcon/>
        </IconButton>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={isShowSnackbar}
        autoHideDuration={1000 * 3}
        onClose={handleCloseSnackbar}
        message="Email Copied"
        color="success"
        // action={action}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Email copied to clipboard
        </Alert>
      </Snackbar>
    </>
  )
}

export function ContactEmailDialog(props: PropsContactEmailDialog) {

  const {
    onClose,
  } = props;
  
  const {
    spacing,
    palette: {
      primary: {
        main,
      },
    }
  } = useTheme();

  const divider = useMemo(() =>
    <Divider
      sx={{
        opacity: 1,
        margin: spacing(2, 3),
      }}
      color={main}
    />
  , [main]);

  return (
    <>
      <Dialog
        maxWidth="mobileLarge"
        {...props}
      >
        <DialogTitle>
          Connect by Email
        </DialogTitle>
        <DialogContent>
          <Typography>
            I maintain two professional facing email addresses for
            seperate purposes
            please see below and use the one that meets your use case.
          </Typography>

          {divider}

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h6">
              Jobs / Recuritment / etc
            </Typography>

            <Typography>
              YonHolmesJobs@gmail.com
            </Typography>

            <MailButtons
              email="YonHolmesJobs@gmail.com"
            />
          </Box>

          {divider}

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h6">
              General Contact
            </Typography>

            <Typography>
              Yon.Holmes@gmail.com
            </Typography>

            <MailButtons
              email="Yon.Holmes@gmail.com"
            />
          </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={(ev) => onClose?.(ev, 'escapeKeyDown')}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );

}