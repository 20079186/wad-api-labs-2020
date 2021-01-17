import express from 'express';
import {getMovieReviews} from '../tmdb-api';
import movieModel from '../movies/movieModel';

const router = express.Router();

router.get('/nowPLaying', (req, res, next) => {
    nowPlayingMoviesModel.find().then(nowPlaying => res.status(200).send([nowPlaying])).catch(next);
  });

  router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
  });
  
 
  
  export default router;