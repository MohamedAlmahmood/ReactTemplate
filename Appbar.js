import { AppBar, Toolbar, Typography, Button, ButtonGroup, Grid, IconButton, Box, Tabs, Tab } from "@mui/material";
import BadgeIcon from '@mui/icons-material/Badge';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import MyDrawer from "./drawer";

export default function Appbar() {
    const [value, setValue] = useState()
    return (
        <AppBar color="background" elevation={0} >
            <Toolbar >
                <Grid container alignItems="center">


                    <Grid display="flex" xs={10} alignItems="center">

                        <BadgeIcon fontSize='medium' sx={{ mr: 1.5 }} />
                        <Typography fontSize={18} fontWeight={600} letterSpacing={3} noWrap >MY WEBSITE</Typography>

                    </Grid>


                    <Grid display="flex" xs={2} justifyContent="right" alignItems="center">

                        <ButtonGroup color='inherit' variant="filled" aria-label="outlined primary button group" size="large"
                            sx={{ '& .MuiButtonGroup-grouped:not(:last-of-type)': { borderColor: "red" }, }} disableElevation>
                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <Tabs textColor="primary" indicatorColor="primary" value={value} onChange={(e, value) => setValue(value)} sx={{ padding: 1 }}>
                                    <Tab label='Home' />
                                    <Tab label='Skills' />
                                    <Tab label='Education' />
                                    <Tab label='Work' />
                                    <Tab label='Contact' />
                                </Tabs>
                            </Box>
                            <IconButton color='Instagram' size="small">
                                <InstagramIcon fontSize="small" />
                            </IconButton>
                            <IconButton color='LinkedIn' size="small">
                                <LinkedInIcon fontSize="small" />
                            </IconButton>
                            <IconButton sx={{ mr: -1 }} color='inherit' size="small">
                                <EmailIcon fontSize="small" />
                            </IconButton>
                        </ButtonGroup>
                        <Box alignItems="center" justifyContent="center" sx={{ display: { xs: "flex", md: "none" }, ml: 2, mr: -1.5 }}>
                            <MyDrawer />
                        </Box>
                    </Grid>


                </Grid>
            </Toolbar>
        </AppBar>
    )
}

/*
      
                                <Button variant="text">Home</Button>
                                <Button variant="text">Skills</Button>
                                <Button variant="text">Education</Button>
                                <Button variant="text">Work</Button>
                                <Button variant="text" sx={{ mr: 3 }}>Contact</Button>
                            </Box>
*/