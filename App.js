import './App.css';
import Appbar from './Components/Appbar/Appbar';
import theme from './Styling/theme';
import { Container } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles'
import {useEffect} from 'react'//for page title that can be seen in the tab

function App() {
  useEffect(() => {
    document.title = "My Website";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Appbar></Appbar>
      </Container>
    </ThemeProvider>
  );
}

export default App;
