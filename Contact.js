import Appbar from './Appbar/Appbar';
import { Container, Typography } from "@mui/material";

export default function Contact({Path}) {
  return (
    <>
    <Appbar Path={Path}/>
    <Container maxWidth={false} sx={{mt: 10}}>
        <Typography>Contact</Typography>
        <Typography>Contact</Typography>
        <Typography>Contact</Typography>
        <Typography>Contact</Typography>
        <Typography>Contact</Typography>
        <Typography>Contact</Typography>
    </Container>
    </>
  );
}
