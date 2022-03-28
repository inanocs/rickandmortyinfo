import {
  CircularProgress,
  createTheme,
  Theme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import Section from "../Section/Section";

const theme: Theme = createTheme({
  components: {
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: {
          color: "green",
        },
      },
    },
  },
});

const Loader: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Section className="section section__text--center">
        <CircularProgress color="primary" />
      </Section>
    </ThemeProvider>
  );
};
export default Loader;
