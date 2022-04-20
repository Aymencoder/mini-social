import { AccountBox ,Groups, Home, Pages, Person, Settings, Storefront } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { Box } from '@mui/system';
import NightsStayIcon from '@mui/icons-material/NightsStay';

import '../App.css';
function SideBar({mode , setMode}) {
  return (
    <Box
    flex={1}
    p={2}
    sx={{ display: {xs : 'none' , sm : 'block'}}}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton variant="a">
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton variant="a">
              <ListItemIcon>
                <Pages/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton variant="a">
              <ListItemIcon>
                <Groups/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton variant="a">
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton variant="a">
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton variant="a">
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton variant="a">
              <ListItemIcon>
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton variant="a" disableRipple>
              <ListItemIcon>
                <NightsStayIcon/>
              </ListItemIcon>
              <Switch onClick={e => setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
    </Box>
  );
}

export default SideBar;
