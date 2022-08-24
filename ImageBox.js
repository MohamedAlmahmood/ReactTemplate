import { Box, Typography, Grid } from "@mui/material";
import MapleLeaf from './MapleLeaf.png'

export default function ImageBox() {
    return (
        <>
            <Box sx={{
                ml: -4, mr: -4,
                display: { xs: "none", md: "flex" },
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${MapleLeaf})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                objectFit: 'cover',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '4rem',
                height: '100vh',
                width: 'auto'
            }}>
                <Grid container>
                    <Grid xs={12}>
                        <Typography fontSize={35} padding={20}>
                            40 Years of Excellence and Experience. <br/>Building a Brighter Future for Bahrain and it's People.
                        </Typography>
                    </Grid>
                </Grid>

            </Box>

            <Box sx={{
                ml: -4, mr: -4,
                display: { xs: "flex", md: "none" },
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${MapleLeaf})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                objectFit: 'cover',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '4rem',
                height: '50vh',
                width: 'auto'
            }}>
                <Grid container>
                    <Grid xs={12}>
                        <Typography fontSize={23} padding={5}>
                            40 Years of Excellence and Experience. <br/>Building a Brighter Future for Bahrain and it's People.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}