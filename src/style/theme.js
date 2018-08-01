import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff5d51',
      secondary: '#000000',
    },
    secondary: {
      main: '#bdbdbd',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
    background: {
      default: '#f7f7f7',
    },
  },
  typography: {
    htmlFontSize: 16,
    color: '#ffffff',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 100,
    fontSize: 16,
    lineHeight: '145%',
    body1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 100,
    },
    headline: {
      fontFamily: "'Montserrat', sans-serif",
      textTransform: 'uppercase',
      fontWeight: 100,
      color: '#999',
    },
    title: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      lineHeight: '2rem',
      fontSize: '1.5rem',
    },
    subheading: {
      fontWeight: 300,
    },
    button: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      boxShadow: 'none !important',
      // borderRadius: 0,
      textTransform: 'none',
    },
    display1: {
      fontFamily: "'Montserrat', sans-serif",
      color: '#4c4c4c',
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  maxContentWidth: 760,
  leftDrawerWidth: 320,
  leftDrawerWidthMin: 73,
  shadow: '1px 1px 0px 1px #e1e1e1',
  overrides: {
    MuiInput: {
      input: {
        paddingLeft: '10px',
      },
      underline: {
        '&:before': {
          borderBottom: 'rgba(0, 0, 0, 0.42) thin solid',
          width: '100%',
          borderLeft: 'thin solid rgba(0, 0, 0, 0.42)',
          borderRight: 'rgba(0, 0, 0, 0.42) thin solid',
          height: '15px',
          textAlign: 'center',
          backgroundColor: 'none',
        },
        '&:after': {
          backgroundColor: 'rgba(0, 0, 0, 0.42)',
        }, 
        '&:hover': {
          borderBottom: 'thin solid white',
          borderLeft: 'thin solid white',
          borderRight: 'white thin solid',
        }, 
        '&:focus': {
          borderBottom: 'thin solid white',
          borderLeft: 'thin solid white',
          borderRight: 'solid thin white',
        }, 
        '&:hover:not($disabled):before' : {
          height: '15px',
          borderBottom: 'rgba(0, 0, 0, 0.42) thin solid',
          borderLeft: 'thin solid rgba(0, 0, 0, 0.42)',
          borderRight: 'rgba(0, 0, 0, 0.42) thin solid',
          backgroundColor: 'transparent',
        },
        '&:hover:$disabled:before' : {
          height: '15px',
          borderBottom: 'white thin solid',
          borderLeft: 'thin solid white',
          borderRight: 'white thin solid',
          backgroundColor: 'transparent',
        }
      },
      error: {
        '&:before': {
          borderBottom: 'white thin solid',
          borderLeft: 'thin solid white',
          borderRight: 'white thin solid'
        },
        '&:after': {
          backgroundColor: 'rgba(0, 0, 0, 0.42) !important',
        },
        '&:focus' : {
          borderBottom: 'transparent thin solid',
          borderLeft: 'thin solid white',
          borderRight: 'white thin solid'
        },
        '&:hover': {
          borderBottom: 'transparent thin solid',
          borderLeft: 'thin solid white',
          borderRight: 'white thin solid'
        }, 
      }
    },
    MuiFormLabel: {
      root: {
        paddingLeft: '10px',
      }
  }
  }
});


export default theme;
