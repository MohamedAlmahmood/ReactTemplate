import * as React from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemText, Divider, Box } from '@mui/material';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function MyDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor="right">
                <List aria-label="Navigation">

                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemText primary="Home" />
                    </ListItemButton>

                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemText primary="Skills" />
                    </ListItemButton>

                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemText primary="Education" />
                    </ListItemButton>

                    <ListItemButton
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                    >
                        <ListItemText primary="Work" />
                    </ListItemButton>

                    <ListItemButton
                        selected={selectedIndex === 5}
                        onClick={(event) => handleListItemClick(event, 5)}
                    >
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </List>
                
                <List style={{ marginTop: `auto` ,gap: "0", padding:10}} >
                    <Divider/>
                    <IconButton color='Instagram' size="small" sx={{padding: 2}}>
                        <InstagramIcon fontSize="small" />
                    </IconButton>
                    <IconButton color='LinkedIn' size="small" sx={{padding: 2}}>
                        <LinkedInIcon fontSize="small" />
                    </IconButton>
                    <IconButton  color='inherit' size="small" sx={{padding: 2}}>
                        <EmailIcon fontSize="small" />
                    </IconButton>
                </List>

            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}


{/* <Box alignItems="right" justifyContent="center" sx={{position: "fixed", bottom: 0, paddingBottom: 2, justifyContent:"center"}}>
heelo
</Box> */}