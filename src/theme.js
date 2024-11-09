import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "Helvetica Neue",
      "Arial",
      "sans-serif"
    ].join(","),
    allVariants: {
      color: 'white'
    },
    h2: {
      fontWeight: 800
    },
    h3: {
      fontWeight: 800
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#FFF',
          backgroundColor: 'rgba(0,0,0,.4)',
          width: '100%',
          borderRadius: '.5rem',
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: '#FFF',
        }
      }
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.11)',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#000011',
        }
      }
    }
  },
});

export default theme;