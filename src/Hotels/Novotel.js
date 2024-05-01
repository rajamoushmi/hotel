import { useNavigate } from 'react-router-dom';
 import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {  Typography,Card,CardMedia,CardActions,Button,CardContent,Grid } from '@mui/material';
import BottomNavigationMUI from '../components/BottomNavigationMUI';
import '../App.css';

export const NoVotel = () =>  {
  const navigate = useNavigate()
  return (
    <Stack>
    <Typography textAlign='center' variant='h2'  style={{color: "black"  }} className='typoclass' >NOVOTEL HOTEL</Typography>
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
     <img src='https://media-cdn.tripadvisor.com/media/photo-s/17/d0/cb/8e/novotel-vijayawada-varun.jpg'  width='600px' height='600cm' alt='show image' />
    </Stack>
    <Stack>
    
        <Stack paddingLeft={2}>
             <Typography  style={{color: 'black'}} >
                  Novotel Vijayawada Varun Hotel that makes every moment matter It is truly a pleasure to welcome you to Novotel Vijayawada Varun. Experience a great stay with us by savoring on delightful cuisines, taking a dip in the infinity pool and a relaxing session at the spa. We hope and strive to cater to your every need.Abhishek Pani, Hotel Manager Novotel Vijayawada Varun offers an ultimate stay experience among business, leisure travelers and families alike. The hotel is the first and only International 5 star deluxe hotel in the city. It adorns 233 exclusive categories of guest rooms furnished with contemporary design and bright & spacious interiors which feature a range of in-room facilities such as 24/7 high speed internet access and many more promising a hassle-free stay. It is the most popular and sought after dining destination in the city. Strategically located in the heart of the city, Novotel Vijayawada Varun provides an ultimate stay experience with multi-cuisine restaurants, bar, spa, banquet halls and a beautiful infinity swimming pool among business, leisure travelers & families. Novotel Vijayawada Varun is situated in the city of Vijayawada, which lies on the banks of River Krishna in Andhra Pradesh, providing varied categorization of guest rooms furnished with contemporary design and bright & spacious interiors.
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
  variant="contained"
  sx={{ mt: 3, mb: 2, width: 'small' }}
  onClick={() => navigate('/bookhotel')}
></Button>

    </Stack>
    <Stack>
       <BottomNavigationMUI />
    </Stack>

    </Stack>
  );
}