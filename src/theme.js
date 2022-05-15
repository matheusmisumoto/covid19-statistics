import { createTheme } from "@material-ui/core/styles";

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
  overrides: {
    MuiInputBase: {
      root: {
        color: '#FFF',
        backgroundColor: 'rgba(0,0,0,.4)',
        width: '100%',
        borderRadius: '.5rem',
      },
    },
    MuiSvgIcon: {
      root: {
        fill: '#FFF',
      }
    },
    MuiSelect: {
      root: {
        padding: '1rem 1rem',
      }
    },
    MuiSkeleton: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.11)',
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#000011',
      },
    }
  },
});

export default theme;