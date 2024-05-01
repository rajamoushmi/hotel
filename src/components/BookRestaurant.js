import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid,Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export const BookaRestaurant = () => {
    const navigate =useNavigate();
  return (
    <>
    <Stack paddingLeft='0.5cm' paddingBottom='0.5cm' >
    <Grid container>
        <Grid item xs={3} > 
        <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="390"
        
        image={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/32/64/ac/hotel-view.jpg?w=700&h=-1&s=1'}
        alt="SWARNA PALACE RESTAURANT"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        SWARNA PALACE RESTAURANT
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Everything was perfect, good food, good people, good restaurant, good rooms, parking place, location, ambience, etc.Service was also good and management is also good.
         Breakfast has little options, wifi is good.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"   onClick={()=>navigate('novotel')}     variant='outlined'      >MORE INFO</Button>
      </CardActions>
    </Card>
        </Grid>


        <Grid item xs={3} > 
        <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="340"
        image=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjXGF4p2SUvOs59tDHDQtja15OFdAFs5B1A&usqp=CAU"
        alt="cascades restaurant"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        cascades restaurant
        </Typography>
        <Typography variant="body2" color="text.secondary">
        If you feel hungry after visiting Sri Kanaka Mahalakshmi Temple, have a meal at this restaurant. Order dishes of Chinese and Indian cuisines at Cascades Restaurant. Try good chicken biryani, paneer and chicken this place offers. The cooks here prepare tasty ice cream and good brownies. It's a must when visiting this spot to taste delicious cordial. Great coffee is the right choice.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"    variant='outlined'    onClick={()=>navigate('goutham-grand')}   >MORE INFO</Button>
      </CardActions>
    </Card>
        </Grid>


        <Grid item xs={3} > 
        <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="366"
        image="https://media-cdn.tripadvisor.com/media/photo-s/0f/70/24/c1/tomatoes-restaurant.jpg"
        alt="Merchant logo
Little Spice A Multi cuisine Family Restaurant A/C"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Merchant logo
Little Spice Restaurant A/C
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Economical Price, Awesome Spot to Hangout, Excellent Location, Contactless Delivery, Delicious Taste, Mouth Watering Food.
        Everything was perfect, good food, good people, good restaurant, good rooms, parking place, location, ambience, etc
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"    variant='outlined'      >MORE INFO</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={3}  > 
        <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="328"
        image="https://img.restaurantguru.com/rbb0-Nawaabs-The-Arabian-restaurant-interior.jpg"
        alt="NAWAABS THE ARABIAN RESTAURANT"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        NAWAABS THE ARABIAN RESTAURANT
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Nawaabs An Arabic Restaurant in Tirumala, Tirupati is a reliable name in the industry as they aim to deliver the best experience to their customers.
         This has helped them build up a loyal customer base. They started their journey in and ever since, they have ensured that the customer remains at the centre of their business operations and philosophy
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"    variant='outlined'      >MORE INFO</Button>
      </CardActions>
    </Card>
        </Grid>
    </Grid>
</Stack>





 
    </>
  );
}






















// import React from 'react'

// export const BookaRestaurant = () => {
//   return (
//     <div>
    

    
//     </div>
//   )
// }