import Appbar from './Appbar/Appbar';
import { Container, Typography } from "@mui/material";

export default function Skills({Path}) {
  return (
    <>
    <Appbar Path={Path}/>
    <Container maxWidth={false} sx={{mt: 10}}>
        <Typography>Skills</Typography>
        <Typography>Skills</Typography>
        <Typography>Skills</Typography>
        <Typography>Skills</Typography>
        <Typography>Skills</Typography>
        <Typography>Skills</Typography>
    </Container>
    </>
  );
}
