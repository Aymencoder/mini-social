import '../App.css';
import { AppBar, Toolbar, Typography , styled, InputBase, Badge ,Box, Avatar, Menu, MenuItem } from '@mui/material';
import { Mail, Notifications } from '@mui/icons-material';
import { useState } from 'react';

const SyledToolabr = styled(Toolbar)({
  display: "flex",
  justifyContent:"space-between"
})

const Search = styled("div")(({theme})=> ({
  backgroundColor: "white",
  padding: "5px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}))

const Icons = styled(Box)(({theme})=>({
  display: "none",
  gap: "20px",
  alignItems: "flex-end",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))

const UserBox = styled(Box)(({theme})=>({
  display: "flex",
  gap: "5px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}))


function NavBar({mode}) {
  const [open,setOpen] = useState(false)

  return (
    <div className="navbar">
        <AppBar position='fixed'>
            <SyledToolabr>
                <Typography variant='h6' fontWeight="bold">AymenCoder</Typography>
                <Search><InputBase sx={{color: 'black'}} placeholder='search'/></Search>
                <Icons>
                  <Badge badgeContent={2} color="error">
                    <Mail/>
                  </Badge>
                  <Badge badgeContent={4} color="error">
                    <Notifications/>
                  </Badge>
                  <Avatar 
                  onClick={e => setOpen(true)}
                  sx={{width:30 , height: 30}}
                  />
                </Icons>
                <UserBox
                onClick={e => setOpen(true)}
                >
                    <Avatar sx={{width:30 , height: 30}}/>
                    <Typography>Aymen L</Typography>
                </UserBox>
            </SyledToolabr>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              open={open}
              onClose={e => setOpen(false)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    </div>
  );
}

export default NavBar;
