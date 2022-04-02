import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
  components: {
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: {
          color: "green",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          background: "var(--main-white)",
          "&:hover": {
            backgroundColor: "var(--main-white)",
            opacity: 0.8,
          },
          "&.Mui-selected": {
            background: "var(--main-green)",
            "&:hover": {
              backgroundColor: "var(--main-green)",
              opacity: 0.8,
            },
          },
        },
      },
    },
  },
});
