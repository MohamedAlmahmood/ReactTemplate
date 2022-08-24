import ImageBox from './ImageBox/ImageBox';
import Appbar from './Appbar/Appbar';
import { Container} from "@mui/material";

export default function Home({Path}) {
  return (
    <>
    <Appbar Path={Path}/>
    <Container maxWidth={false} >
        <ImageBox/>
    </Container>
    </>
  );
}
