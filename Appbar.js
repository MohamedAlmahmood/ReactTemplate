import { AppBar, Toolbar, Typography, ButtonGroup, Grid, IconButton, Box, Tabs, Tab } from "@mui/material";
import MapleLeafLogo from "./MapleLeafLogo.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import MyDrawer from "./drawer.tsx";
import {Link} from 'react-router-dom'


export default function Appbar({Path}) {
    const pathToIndex = {
        Home: 0,
        Skills: 1,
        Education: 2,
        Work: 3,
        Contact: 4
    }
    const [selectedTab, setSelectedTab] = useState(pathToIndex[Path])
    const pages = ["Home", "Skills", "Education", "Work", "Contact"]
    
    return (
        <AppBar color="background" position='fixed' elevation={0}>
            <Toolbar >
                <Grid container alignItems="center">


                    <Grid display="flex" xs={10} alignItems="center">
                        <img src={MapleLeafLogo} alt="mylogo!" style={{maxWidth: 29, marginRight: 10}}/>
                        <Typography fontSize={17} fontWeight={600} letterSpacing={0} fontFamily='cursive' noWrap >MY WEBSITE</Typography>
                    </Grid>


                    <Grid display="flex" xs={2} justifyContent="right" alignItems="center">
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <ButtonGroup color='inherit' variant="filled" aria-label="outlined primary button group" size="large"
                                sx={{ '& .MuiButtonGroup-grouped:not(:last-of-type)': { borderColor: "red" }, }} disableElevation>
                                <Tabs textColor="primary" indicatorColor="primary" value={selectedTab} onChange={(e, selectedTab) => setSelectedTab(selectedTab)} sx={{ padding: 1 }}>
                                    {pages.map((page)=>(
                                        <Tab label={page} component={Link} to={`/${page}`}/>
                                    ))}
                                </Tabs>
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
                        </Box>
                        <Box alignItems="center" justifyContent="center" sx={{ display: { xs: "flex", md: "none" }, ml: 2, mr: -1.5 }}>
                            <MyDrawer Path={pathToIndex[Path]+1}/>
                        </Box>
                    </Grid>


                </Grid>
            </Toolbar>
        </AppBar>
    )
}

/*                                <Tabs textColor="primary" indicatorColor="primary" value={value} onChange={(e, value) => setValue(value)} sx={{ padding: 1 }}>
                                    <Tab label='Home' />
                                    <Tab label='Skills' />
                                    <Tab label='Education' />
                                    <Tab label='Work' />
                                    <Tab label='Contact' />
                                </Tabs>*/