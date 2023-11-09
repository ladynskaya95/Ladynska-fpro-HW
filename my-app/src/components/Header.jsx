import React from 'react';
import { Box, Typography } from "@mui/material";

export const Header = ({ todoCount }) => {
  return (
    <Box textAlign="left">
      <Typography className="header" variant="h1" component="h1" gutterBottom>
        Todo List: {todoCount}
      </Typography>
    </Box>
  );
};
