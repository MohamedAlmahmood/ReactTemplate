import Appbar from './Appbar/Appbar';
import { Container, Typography } from "@mui/material";

export default function Education({Path}) {
  return (
    <>
    <Appbar Path={Path}/>
    <Container maxWidth={false} sx={{mt: 10}}>
        <Typography>Education</Typography>
        <Typography>Education</Typography>
        <Typography>Education</Typography>
        <Typography>Education</Typography>
        <Typography>Education</Typography>
        <Typography>Education</Typography>
    </Container>
    </>
  );
}
