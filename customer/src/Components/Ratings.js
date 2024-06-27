import React from 'react';
import { Box, Typography, Grid,  Paper } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';

const Ratings = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', py: 4 }}>
     

      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
            <LocalOfferIcon sx={{ fontSize: 48, color: 'rgb(233, 30, 99)' }} />
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Local Commitment
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>
              We're dedicated to our community, offering personalized service that meets your exact needs.
            </Typography>
          </Paper>
        </Grid>



        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
            <EmojiEventsIcon sx={{ fontSize: 48, color: 'rgb(233, 30, 99)' }} />
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Quality Service
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>
              Experience meticulous detailing using premium products for a stunning finish every time.
            </Typography>
          </Paper>
        </Grid>



        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
            <ThumbUpAltIcon sx={{ fontSize: 48, color: 'rgb(233, 30, 99)' }} />
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Customer Satisfaction
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>
              Your happiness drives us. We listen, adapt, and deliver beyond expectations.
            </Typography>
          </Paper>
        </Grid>



        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
            <StarIcon sx={{ fontSize: 48, color: 'rgb(233, 30, 99)' }} />
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Expertise and Trust
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>
              With years of trusted service, your vehicle is in skilled hands.
            </Typography>
          </Paper>
        </Grid>


        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
            <GroupIcon sx={{ fontSize: 48, color: 'rgb(233, 30, 99)' }} />
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Community Support
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>
              Proudly supporting local growth and prosperity.
            </Typography>
          </Paper>
        </Grid>


        
      </Grid>
    </Box>
  );
}

export default Ratings;
