import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { TextField } from '@mui/material';
import { Stack } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function BottomNavigationMUI() {
  const [value, setValue] = React.useState(0);
const eventHandler=()=>{
  window.open('https://www.instagram.com/direct/inbox/')
}
const eventFace=()=>{
  window.open('https://www.facebook.com/')
}
const eventTwitter=()=>{
  window.open('https://twitter.com/i/flow/login')
}
  return (
    <>
    <hr />
      <Stack paddingLeft={75} paddingBottom='1cm' >
       <TextField sx={{
            width: { sm: 200, md: 300 },
            "& .MuiInputBase-root": {
               height: 50  }}} label='feedback' />
     </Stack>
      <Box sx={{ width: 1500 }}>
        <BottomNavigation
         showLabels
         value={value}
         onChange={(event, newValue) => {
           setValue(newValue);
         }}
       >
         <BottomNavigationAction label="Insta" onClick={eventHandler} icon={<InstagramIcon />} />
         <BottomNavigationAction label="Facebook" onClick={eventFace} icon={<FacebookIcon />} />
         <BottomNavigationAction label="Twitter" onClicl={eventTwitter} icon={<TwitterIcon />} />
       </BottomNavigation>
      </Box>
    </>
  );
}