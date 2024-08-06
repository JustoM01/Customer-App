import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';

const Ratings = () => {
  return (
    <Box  component="section" sx={{ py: 4, px: 2, bgcolor: '#f4f4f4' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 4, fontFamily: 'Oswald, sans-serif', color: 'rgb(233, 30, 99)' }}>
        Why Us?
      </Typography>

      <Grid container spacing={8} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper   component="article" sx={{ p: 3, textAlign: 'center', height: '100%', borderRadius: '10px', boxShadow: 3 }}>
            <LocalOfferIcon       aria-label="Local Commitment Icon" sx={{ fontSize: 48, color: 'rgb(233, 30, 99)' }} />
            <Typography variant="h5" sx={{ mt: 2, mb: 1, fontFamily: 'Oswald, sans-serif' }}>
              Local Commitment
            </Typography>
            <Typography sx={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
              We're dedicated to our community, offering personalized service that meets your exact needs.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper  component="article" sx={{ p: 3, textAlign: 'center', height: '100%', borderRadius: '10px', boxShadow: 3 }}>
            <EmojiEventsIcon        aria-label="Quality Service Icon" sx={{ fontSize: 48, color: 'rgb(233, 30, 99)' }} />
            <Typography variant="h5" sx={{ mt: 2, mb: 1, fontFamily: 'Oswald, sans-serif' }}>
              Quality Service
            </Typography>
            <Typography sx={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
              Experience meticulous detailing using premium products for a stunning finish every time.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper component="article" sx={{ p: 3, textAlign: 'center', height: '100%', borderRadius: '10px', boxShadow: 3 }}>
            <ThumbUpAltIcon        aria-label="Customer Satisfaction Icon" sx={{ fontSize: 48, color: 'rgb(233, 30, 99)' }} />
            <Typography   variant="h5" sx={{ mt: 2, mb: 1, fontFamily: 'Oswald, sans-serif' }}>
              Customer Satisfaction
            </Typography>
            <Typography sx={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
              Your happiness drives us. We listen, adapt, and deliver beyond expectations.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper component="article"  sx={{ p: 3, textAlign: 'center', height: '100%', borderRadius: '10px', boxShadow: 3 }}>
            <StarIcon     aria-label="Expertise and Trust Icon" sx={{ fontSize: 48, color: 'rgb(233, 30, 99)' }} />
            <Typography variant="h5" sx={{ mt: 2, mb: 1, fontFamily: 'Oswald, sans-serif' }}>
              Expertise and Trust
            </Typography>
            <Typography sx={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
              With years of trusted service, your vehicle is in skilled hands.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper component="article" sx={{ p: 3, textAlign: 'center', height: '100%', borderRadius: '10px', boxShadow: 3 }}>
            <GroupIcon    aria-label="Community Support Icon" sx={{ fontSize: 48, color: 'rgb(233, 30, 99)' }} />
            <Typography variant="h5" sx={{ mt: 2, mb: 1, fontFamily: 'Oswald, sans-serif' }}>
              Community Support
            </Typography>
            <Typography sx={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
              Proudly supporting local growth and prosperity.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Ratings;
