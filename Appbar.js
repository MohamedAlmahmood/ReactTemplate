import { AppBar, Toolbar, Typography, Button, ButtonGroup, Grid, IconButton  } from "@mui/material";
import BadgeIcon from '@mui/icons-material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Appbar() {
    return (
        <AppBar color="background" elevation={0}>
            <Toolbar >
                <Grid container alignItems="center">
                    <Grid display="flex" xs={10} alignItems="center">
                        <BadgeIcon fontSize='medium' sx={{ mr: 1.5 }} />
                        <Typography variant="h5" noWrap >My Website</Typography>
                    </Grid>
                    <Grid display="flex" xs={2} justifyContent="right" alignItems="center">
                        <ButtonGroup color='inherit' variant="filled" aria-label="outlined primary button group" size="large"  
                            sx={{'& .MuiButtonGroup-grouped:not(:last-of-type)': {borderColor: "red"},}} disableElevation>
                            <IconButton color='inherit'>
                                <InstagramIcon/>
                            </IconButton>
                            <IconButton color='inherit'>
                                <LinkedInIcon/>
                            </IconButton>
                            <IconButton sx={{mr:-1}} color='inherit'>
                                <EmailIcon/>
                            </IconButton>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}