import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {  Typography,Card,CardMedia,CardActions,Button,CardContent,Grid } from '@mui/material';
import BottomNavigationMUI from '../components/BottomNavigationMUI';
import '../App.css';
export const GouthamGrand = () =>{
    const navigate = useNavigate()
  return (
    <Stack>
    <Typography textAlign='center' variant='h2'  style={{color: 'crimson'  }} className='typoclass' >GOUTHAM GRAND HOTEL</Typography>
          {/* <Typography variant='h6' component='div' gutterBottom textAlign='center' >WANT TO BOOK A ROOM</Typography> */}
    <Stack component="form" noValidate spacing={3} paddingLeft='2cm' >
      <TextField
        id="date"
        label="Start date"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 300 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
       
      <TextField
        id="datetime-local"
        label="End date"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        sx={{ width: 300 }}
        height='50'
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Stack direction='row' spacing={2} >
          <TextField sx={{
           width: { sm: 200, md: 300 },
           "& .MuiInputBase-root": {
             height: 50 }}} label='Enter Number of Rooms' required variant='filled'  />
              <TextField sx={{
           width: { sm: 200, md: 300 },
           "& .MuiInputBase-root": {
             height: 50 }}} label='Number of Adults' required variant='filled'  />
              <TextField sx={{
           width: { sm: 200, md: 300 },
           "& .MuiInputBase-root": {
             height: 50 }}} label='Nubmber of Childs' required variant='filled'  />
        </Stack>
    </Stack>
    <Stack paddingLeft='13cm' paddingRight='2cm' paddingBottom='1cm' paddingTop='1cm'> 
     <img src='https://media-cdn.tripadvisor.com/media/photo-s/0a/86/55/e1/goutham-grand-hotel.jpg'  width='600px' height='600cm' />
    </Stack>
    <Stack>
    
        <Stack paddingLeft={2}>
             <Typography  style={{color: 'blue'}} >
             Goutham Grand a unit of Goutham Residency Pvt.Ltd, a premium luxury first class full service hotel in Tenali, Guntur and Vijayawada surroundings. Goutham Grand Hotel stands tall in its grandeur, sparkling away to glory in the gleam of the sunlight. As you enter the lobby, a burst of cool and rejuvenating semblance engulfs you. The hotel is located in heart of the Tenali which is just 100mts from railway station, 25mins drive from Vijayawada, and 20mins drive from Guntur. The very first 3 star hotel in the city, it has state-of-the-art facilities for the discerning business traveller. Tenali is also known for its canals passing to the city popularly known as Andhra Paris.
            </Typography>
        </Stack>
    </Stack>
    <hr />
<hr />
<Stack paddingLeft='8cm'>
    <Grid container>
        <Grid item xs={6} > 
        <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="358"
        
        image={'https://www.crazymasalafood.com/wp-content/images/french-toast-1.jpg'}
        alt="French Toast"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        French Toast
        </Typography>
        <Typography variant="body2" color="text.secondary">
        In French, it is known as the lost bread to indicate that it has become stale. In the ancient times, poor people had a routine of immersing the bun in milk or eggs and then fry it, so it becomes easy to eat. The bread is known as the toast as it serves as the perfect combination with the drinks.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"    onClick={()=>navigate('book-item')}    variant='outlined'      >Book Item</Button>
      </CardActions>
    </Card>
        </Grid>


        <Grid item xs={6} > 
        <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="378"
        image="https://www.crazymasalafood.com/wp-content/images/beef-sandwich-1.jpg"
        alt="Beef Sandwich"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Beef Sandwich
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This Sandwich consists of bread with roasted beef with slices of tomato on both sides, topped with lettuce and sometimes red onion with added mustard, salt, and pepper. It is a perfect combination with barbecue sauce or cheese. It usually looks like a hamburger bun.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"    variant='outlined'      >Book Item</Button>
      </CardActions>
    </Card>
        </Grid>
    </Grid >
    <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               onClick={()=>navigate('/thankyou')}
              >
                Confirm Booking
              </Button>
    </Stack>

    <Stack>
       <BottomNavigationMUI />
    </Stack>
    </Stack>
  );
}




















// import React from 'react'

// export const GouthamGrand = () => {
//   return (
//     <div>


//     </div>
//   )
// }