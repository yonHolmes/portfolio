import { ProficiencyLevel } from "@/consts/proficiencyConsts";
import {
  useTheme,
  styled,
  Box,
  Tooltip,
  LinearProgress,
  LinearProgressProps,
  ClickAwayListener,
  Typography,
} from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";
// import StarOutline from "@mui/icons-material/StarOutline";

type StyledLinearProgressProps = LinearProgressProps & {
  colorProgress: string;
}

const StyledLinearProgress = styled(({ colorProgress, ...rest }: StyledLinearProgressProps) => (
  <LinearProgress {...rest}/>
))`
  .MuiLinearProgress-bar1 {
    background-color: ${({ colorProgress }) => colorProgress};
  }
`;

type PropsProficiency = PropsWithChildren & {
  id?: string,
  level: ProficiencyLevel,
  maxLevel?: number
  skill: string,
  width: React.ComponentProps<typeof Box>["width"],
  minWidth?: React.ComponentProps<typeof Box>["minWidth"],
  contrastingBackground?: boolean,

  // The following props are used on hover of the whole element
  // and then on click
  tooltip?: string,
  onClick?: () => void,
}

function getColor(level: number, maxLevel: number) {
  const maxColor = '#FFCD40';

  if (level === 0) {
    return maxColor
  }

  if (level < Math.ceil(maxLevel * 0.3)) {
    return '#792105';
  }
  if (level < Math.ceil(maxLevel * 0.6)) {
    return '#C0C0C0';
  }
  return maxColor;
}

export function Proficiency(props: PropsProficiency) {
  
  const {
    palette: {
      primary: {
        main,
      },
    },
  } = useTheme();

  const {
    id,
    contrastingBackground,
    skill,
    level,
    maxLevel = 10,
    children,

    tooltip,
    onClick,
  } = props;

  const levelInt = ([
    ProficiencyLevel.Novice,
    ProficiencyLevel.Beginner,
    ProficiencyLevel.Competent,
    ProficiencyLevel.Proficient,
    ProficiencyLevel.Expert
  ].findIndex(val => val === level) + 1) * 2 

  const [levelForAnim, setLevelForAnim] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLevelForAnim(levelInt);
    }, 750);

    return () => clearTimeout(timer);
  });

  const color = getColor(levelInt, maxLevel);

  return (
    <Box
      id={id}
      width="150px"
      data-custom-name="Proficiency"
      onClick={onClick}
      style={{
        cursor: !!onClick ? 'pointer' : 'initial',
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        position="relative"
        padding={1.5}
        paddingBottom={5}
        overflow="clip"
        style={{
          backgroundColor: contrastingBackground
            ? '#dcdcdc54'
            : 'initial',
          borderLeft: `2px solid ${color}`,
          borderBottom: `4px solid ${color}`,
          borderRight: `2px solid ${color}`,
          borderRadius: '50px',
          // boxShadow: "0 4px 10px 0 rgba(189, 208, 223, 0.25)",
          boxShadow: `0 4px 10px 0 ${color}df`,
        }}
      >
        {tooltip
          ? <Tooltip
            title={tooltip}
            placement="top"
          >
            {children as React.ReactElement<unknown, any>}
          </Tooltip>
          : children
        } 
        <Box
          data-custom-name="Proficiency_LinearProgressBox"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          position="absolute"
          bottom="-6px"
          width="100%"
          marginTop={2}
        >
          <Box
            width="100%"
            border={`1px solid ${color}`}
          >
            <Typography
              variant="body2"
              textAlign="center"
              marginBottom={1}
            >
              {level}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}