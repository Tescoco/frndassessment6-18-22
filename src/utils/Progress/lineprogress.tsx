import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box style={{ position: "fixed", height: "5px" }} sx={{ width: "100%" }}>
      <LinearProgress
        sx={{
          backgroundColor: `transparent`,
          "& .MuiLinearProgress-bar": {
            backgroundColor: `#3f51b5`,
          },
        }}
        variant="determinate"
        value={progress}
        style={{ height: "3px" }}
      />
    </Box>
  );
}