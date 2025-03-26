import {
  useTheme,
  styled,
  Box,
  Tooltip,
  LinearProgress,
  LinearProgressProps,
  ClickAwayListener,
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
  level: number,
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

  const [showTooltip, setShowTooltip] = useState(false);
  
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

  const [levelForAnim, setLevelForAnim] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLevelForAnim(level);
    }, 750);

    return () => clearTimeout(timer);
  });

  const color = getColor(level, maxLevel);

  return (
    <ClickAwayListener
      onClickAway={() => setShowTooltip(false)}
    >
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
          paddingBottom={3}
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
          <Tooltip
            title={`${skill} - ${level}/${maxLevel}`}
            open={showTooltip}
            onClose={() => setShowTooltip(false)}
          >
            <Box
              data-custom-name="Proficiency_LinearProgressBox"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              position="absolute"
              bottom="-6px"
              width="100%"
              marginTop={2}
              onClick={() => setShowTooltip(true)}
              sx={{
                // backgroundColor: main,
                cursor: 'pointer',
              }}
            >
              {<StyledLinearProgress
                variant="determinate"
                colorProgress={color}
                value={(levelForAnim / maxLevel) * 100}
                color="info"
                style={{
                  borderRadius: '50px',
                  height: '20px',
                  width: '100%',
                }}
              />}
            </Box>
          </Tooltip>
        </Box>
      </Box>
    </ClickAwayListener>
  )
}