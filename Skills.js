import Appbar from './Components/Appbar/Appbar';
import ImageBox from './Components/ImageBox/ImageBox';
import theme from './Components/Styling/theme';
import { Container } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles'
import {useEffect} from 'react'//for page title that can be seen in the tab

function App() {
  useEffect(() => {
    document.title = "My Website";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Appbar/>
      <Container maxWidth={false}>
        Skills
      </Container>
    </ThemeProvider>
  );
}

export default App;
