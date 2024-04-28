import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-72 mx-auto from-yellow-300 to-cyan-100 bg-gradient-to-t shadow-lg rounded-lg overflow-hdden p-2">
      <img className="w-full max-h-48 min-h-48 object-cover" src={movie.moviemainphotos[0]} alt={movie.movietitle} />
      <div className="p-4">
        <h2 className="font-semibold text-lg capitalize">{movie.movietitle}</h2>
        <div className="flex flex-wrap mt-2">
          <p className="text-sm flex items-center mr-2">
            IMDB ID: <span className="ml-1">{movie.imdbmovieid}</span>
          </p>
        </div>
        <div className="mt-2">
          <h3 className="font-semibold">Languages:</h3>
          <div className="flex flex-wrap gap-1 text-sm">
            {movie.movielanguages.map((language, index,arr) => (
              <span key={index}>{language}{index<arr.length-1&&","}</span>
            ))}
          </div>
        </div>
        <div className="mt-2">
          <h3 className="font-semibold">Countries:</h3>
          <div className="flex flex-wrap gap-1 text-sm">
            {movie.moviecountries.map((country, index,arr) => (
              <span key={index}>{country}{index<arr.length-1&&","}</span>
            ))}
          </div>
        </div>
        <div className="mt-2">
          <h3 className="font-semibold">Genres:</h3>
          <div className="flex flex-wrap gap-1 text-sm">
            {movie.moviegenres.map((genre, index,arr) => (
              <span key={index}>{genre}{index<arr.length-1&&","}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
