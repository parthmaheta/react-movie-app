import React from 'react';
import MovieCard from './MovieCard';

const MovieApp = ({data}) => {

  return (
    <div className="flex flex-wrap mx-auto py-8 gap-2">
      {
        data.map((movie,index)=><MovieCard movie={movie} key={index} />)
      }
      
    </div>
  );
};

export default MovieApp;
