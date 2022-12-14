import { createTheme } from "@mui/material/styles";

export const Colors = {
    primary: "#ff1744",
    secondary: "#424242",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    ///////////////
    // Grays
    ///////////////
    dim_grey: "#696969",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    light_gray: "rgb(230,230,230)",
    ///////////////
    // Solid Color
    ///////////////
    white: "#fff",
    black: "#000",
    instagram: "#E4405F",
    LinkdIn: "#0A66C2",
    Email: "#CD201F"
  };

  const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary: {
            main: Colors.secondary,
        },
        background:{
            main: Colors.white
        },
        Instagram:{
            main: Colors.instagram
        },
        LinkedIn:{
            main: Colors.LinkdIn
        },
        Email:{
            main: Colors.Email
        },
      },
      typography: {
        fontFamily: "Helvetica"
      },
      components: {
        MuiButton: {
          defaultProps: {
            //disableRipple: true,
            //disableElevation: true,
          },
        },
      }
  })

  export default theme