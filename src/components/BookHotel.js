import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid,Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export const BookHotel = () => {
    const navigate =useNavigate();
  return (
    <>
    <Stack paddingLeft='0.5cm' paddingBottom='0.5cm' >
    <Grid container>
       
        <Grid item xs={3} > 
        <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="340"
        image="https://pix10.agoda.net/hotelImages/686810/-1/c09f923160ee26f8999ca844af194f5d.jpg?ca=0&ce=1&s=1024x768"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Goutham Grand Hotel
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Goutham Grand a unit of Goutham Residency,a premium luxuryfirst class full service hotel in Tenali  
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"    variant='contained'    onClick={()=>navigate('/gouthamgrand')}   >MORE INFO</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={3} > 
        <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="358"
        
        image={'https://image.wedmegood.com/resized/800X/uploads/member/1206504/1587128358_Screenshot_from_2020_04_17_18_24_53.png'}
        alt="Novotel Vijayawada Varun"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Novotel Vijayawada Varun
        </Typography>
        <Typography variant="body2" color="text.secondary">
          AVAIABILITIES:Free Breakfast,Free wifi,superking view Room with city view
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"   onClick={()=>navigate('/novotel')} variant='conatined'>MORE INFO</Button>
      </CardActions>
    </Card>
        </Grid>


        <Grid item xs={3} > 
        <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="323"
        image="https://b.zmtcdn.com/data/pictures/0/19587120/a8efa97857586c0fbcaa58893107b685.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Hotel mamtha
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Wake up to the breathtaking views of the surrounding environment from the comfort of your room.
Visit the very popular tourist site of Srinagar, Dal Lake located just 200 m away.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"    variant='contained'>MORE INFO</Button>
      </CardActions>
    </Card>
        </Grid>


        <Grid item xs={3} > 
        <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="300"
        image="https://ak-d.tripcdn.com/images/220l180000014g7g44193_R_1100_824_R5_Q70_D.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Hotel Kosala
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Hotel Kosala Situated in the heart of the city on Eluru Road, with all modern amenities and 3 star facilities. 
        The hotel is 1.5 km away from Railway Station and Bus Station, 23 Km away from the airport.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"    variant='contained'>MORE INFO</Button>
      </CardActions>
    </Card>
        </Grid>
    </Grid>


    

   <br />
   <br />
   <br />
   <Grid container>
        <Grid item xs={3} > 
        <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="350"
        image="https://res.cloudinary.com/simplotel/image/upload/x_0,y_125,w_4000,h_2250,r_0,c_crop,q_80,fl_progressive/w_1500,c_fit,f_auto/manjeera-sarovar-premiere-rajahmundry/HOTEL_DAY_VIEW_zwrvlv"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Manjeera Sarovar Premiere Hotel
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Sarovar Hotels has redefined hospitality through its 95 hotels spread across 60  beautiful locations.
The Sarovar experience presents a smart blend of warm hospitality and modern conveniences.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"    variant='contained'      >MORE INFO</Button>
      </CardActions>
    </Card>
        </Grid>


        <Grid item xs={3} > 
        <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="401"
        image="https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1526992900/Hotel/Rajahmundry/00012004/107967699_56eDSh.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Hotel Shelton Rajamahendri
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Welcome to the world of Shelton and we assure you that the word “care” finds a new meaning at Shelton. 
        Shelton provides you a home away from home with world class comfort and convenience.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"    variant='conatined'      >MORE INFO</Button>
      </CardActions>
    </Card>
        </Grid>


        <Grid item xs={3} > 
        <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="405"
        image="https://www.holidify.com/images/cmsuploads/compressed/TajHotels1_20191120170231.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Taj Tirupathi
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Taj Hotels is a chain of luxury hotels and a subsidiary of the Indian Hotels Company Limited,[1] 
        most demanded on that are, Nariman Point,Tirupathi
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"    variant='conatined'>MORE INFO</Button>
      </CardActions>
    </Card>
        </Grid>


        <Grid item xs={3} > 
        <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="373"
        image="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_360,q_auto,w_360/itemimages/51/83/518361_v3.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Dolphin Hotels Private Limited
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Dolphin Hotel is the premium global chain luxury four star beach hotel in Vizag, from the Dolphin Group for business, 
        leisure & internationally acclaimed 
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"    variant='conatined'>MORE INFO</Button>
      </CardActions>
    </Card>
        </Grid>
    </Grid>
    </Stack>
    </>
  );
}






// import React from 'react'

// export const BookHotel = () => {
//   return (
//     <div>
//     your hotel is booked
//     </div>
//   )
// }