import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Typography,
} from "@mui/material";

type PropsProjectCard = {
  label: string,
  href: string,
  description: string,
  tags?: string[],
  showNavButton?: boolean,
}

export function ProjectCard(props: PropsProjectCard) {

  const router = useRouter();
  function handleNav() {
    router.push(href);
  }

  const {
    label,
    description,
    href,
    tags,
    showNavButton,
  } = props;

  return (
    <Card
      raised
      onClick={handleNav}
      variant="outlined"
      sx={{
        maxWidth: '500px',
        cursor: 'pointer',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        padding={1}
        height="100%"
      >
        <Box>
          <CardHeader title={label} sx={{ padding: 0 }}/>
          {description &&
          <Typography marginTop={1}>
            {description}
          </Typography>}
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          
          {tags &&
          <Box display="flex" flexDirection="row" flexWrap="wrap" gap={1} marginTop="auto" paddingTop={1}>
            {tags.map(tag => <Chip key={tag} label={tag}/>)}
          </Box>}

          {showNavButton &&
          <Box marginLeft="auto">
            <Button onClick={handleNav} sx={{ textTransform: 'none' }}>
              View
            </Button>
          </Box>}
        </Box>
      </Box>
    </Card>
  )
}