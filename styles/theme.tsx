import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette:{
    primary: {
      main:'#644BBA'
    },
    secondary: {
        main: '#ffffff'
    }
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

export default theme;