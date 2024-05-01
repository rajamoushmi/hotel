import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {  Typography,Card,CardMedia,CardActions,Button,CardContent,Grid } from '@mui/material';
import BottomNavigationMUI from '../components/BottomNavigationMUI';
import '../App.css';
export const HotelMamtha = () =>{
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
     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_yhJI-IXxQKlWYgo5OaPx0Gu_KwQ5SJuBA&usqp=CAU'  width='600px' height='600cm' />
    </Stack>
    <Stack>
    
        <Stack paddingLeft={2}>
             <Typography  style={{color: 'blue'}} >
             Hotel Mamta is a 3 star property located in the business capital of Andhra Prasad, the Vijaywada city. The hotel is 1.2 km away from the railway station and 21.4 km away from the Airport. The hotel offers 30 comfortable accommodation in well-appointed rooms equipped air conditioning, living room, LCD and cable television, daily newspaper, study table, sofa unit, dining table, shower area, room service, generators, geyser in bathroom, hot and cold running water and bathroom toiletries. Expedition like Beasant Road (700 m), Prakasam Barrage (2.3 km), Kanaka durga temple (2.6 km), Undavalii caves (6.1 km) and Mangalagiri ( 12.1 km) many more places to explore within the vicinity.
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
               onClick={()=>navigate('/bookhotel')}
              ></Button>
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