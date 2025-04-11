import { Reference } from "@/consts/referenceConsts"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Box,
  Card,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";


type PropsReference = {
  reference: Reference,
};

export function ReferenceItem({ reference }: PropsReference) {

  return (
    <Card
      raised
      variant="elevation"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        padding={2}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={1}
        >
          <Typography>
            {reference.person}
          </Typography>
          <Typography variant="caption">
            {reference.association}
          </Typography>
        </Box>

        {
            reference.linkedIn
              ? (
                <IconButton color="primary" sx={{ width: '50px' }}>
                  <a
                    target="_blank"
                    href={reference.linkedIn}
                    style={{
                      height: '24px', // tag is otherwise 6px taller and throws off alignment
                      color: 'inherit', // override the global disabling (initial)
                    }}
                  >
                    <LinkedInIcon/>
                  </a>
                </IconButton>
              )
              : undefined
          }
      </Box>
      
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        padding={2}
        marginTop={2}
        paddingRight={2}
        height="50vh"
        sx={{
          overflowY: 'scroll',
          fontStyle: 'italic',
        }}
      >
        {reference.content}
      </Box>
    </Card>
  )
}