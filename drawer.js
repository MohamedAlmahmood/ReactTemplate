import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function MyDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <>
            <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>Login</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton onClick={()=>setOpenDrawer(!openDrawer)}> 
                <MenuIcon/>
            </IconButton>   
        </>
    )
}