import React from 'react';
import { Parallax } from 'react-parallax';
import { Button, Card, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './App.css';

const useStyles = makeStyles({
  outlinedText: {
    color: 'white',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // transparent grey
    borderRadius: 15, // rounded edges
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9 aspect ratio
    backgroundSize: 'contain',
  },
});

function App() {
  const classes = useStyles();

  return (
    <Parallax bgImage="/Hatbg.jpg" strength={500} style={{ minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom className={classes.outlinedText}>
        FAN HAT!
        </Typography>
        <Typography variant="h2" align="center" gutterBottom className={classes.outlinedText}>
        hat with a fan!
        </Typography>
        <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={1000}>
          <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/Phil.jpg"
            title="New and improved battery life"
          />
          <CardContent style={{ backgroundColor: 'white', borderRadius: 15 }}>
            <Typography gutterBottom variant="h5" component="h2">
            New and improved battery life
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This ultra cooling hat is perfect for the summer. It has a built in fan that will keep you cool all day long. Powered by 4 AA batteries, this hat will last you all day long.
            </Typography>
            <Button variant="contained" color="primary">
              Buy Now
            </Button>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/Max.jpg"
            title="Hat 1"
          />
          <CardContent style={{ backgroundColor: 'white', borderRadius: 15 }}> 
            <Typography gutterBottom variant="h5" component="h2">
              Light weight and durable
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Coming in under 1 pound, this hat is perfect for all day wear. Made from 100% cotton, this hat is durable and will last you a lifetime.
            </Typography>
            <Button variant="contained" color="primary">
              Buy Now
            </Button>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/bruce.png"
            title="Hat 1"
          />
          <CardContent style={{ backgroundColor: 'white', borderRadius: 15 }}> 
            <Typography gutterBottom variant="h5" component="h2">
              The Bruce
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This product only has a 70% chance of being a hat. It is made from 100% recycled materials and is perfect for the environment.
            </Typography>
            <Button variant="contained" color="primary">
              Buy Now
            </Button>
          </CardContent>
        </Card>
        </Carousel>  
        {/* Repeat for other hats */}
      </Container>
    </Parallax>
  );
}

export default App;