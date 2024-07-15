import React from "react";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";

function HorizontalScrollBar({}) {
  return (
    <Box
      sx={{
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        mt: 7,
        pt: 2,
        pb: 2,
        pl: 0,
        backgroundColor: "#35a8de",
        color: "black",
      }}
      className="hide-scrollbar"
      boxSizing="border-box"
    >
      <Grid container spacing={12} sx={{ flexWrap: "nowrap" }}>
        <Grid item>
          <Typography
            variant="body1"
            sx={{
              pl: 4,
              pr: 4,
              backgroundColor: "#eee",
              borderRadius: 4, 
              fontWeight: "bold", 
              color: "#333", 
              "&:hover": {
                backgroundColor: "#ddd", 
              },
            }}
          >
            All
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" sx={{ px: 2 }}>
            Unread
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" sx={{ px: 2 }}>
            Personal
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" sx={{ pl: 2, pr: 4 }}>
            Regular
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HorizontalScrollBar;
