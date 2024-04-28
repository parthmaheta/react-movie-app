import { useEffect, useMemo, useState } from "react"
import MoiveApp from "./Components/Movies"
import { fetchMovies } from "./store/movieReducer";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Components/Filters";

function App() {
  const dispatch=useDispatch()
  const MOVIES=useSelector(state=>state.MOVIES)
  const [filter,setFilter]=useState({lang:null,genre:null,country:null});
  const [data,setData]=useState([]);
  useEffect(() => {
    dispatch(fetchMovies())     
  }, [])
  

  useEffect(() => {
     if (MOVIES.data && MOVIES.data.length > 0) {
       const MVS = [];
       if (filter.lang || filter.country || filter.genre) {
         MOVIES.data.forEach((mv) => {
           if (filter.lang) {
             if (!mv.movielanguages.includes(filter.lang)) return;
           }
           if (filter.genre) {
             if (!mv.moviegenres.includes(filter.genre)) return;
           }
           if (filter.country) {
             if (!mv.moviecountries.includes(filter.country)) return;
           }

           MVS.push(mv);
         });
         setData(MVS);
       } else {
         setData(MOVIES.data);
       }
     }
  }, [filter,MOVIES])


  

  
   //Create Filter And Extract All Unique Values For Filters
   const FILTERS=useMemo(() => {
    const Genres={};
    const Langs={};
    const Countries={};
    
    MOVIES.data.forEach(mv=>{
      mv.moviegenres.forEach(genre=>{
        if(Genres[genre]===undefined){
          Genres[genre]=true;
        }
      })
      mv.moviecountries.forEach(country=>{
        if(Countries[country]===undefined){
          Countries[country]=true;
        }
      })
      mv.movielanguages.forEach(lang=>{
        if(Langs[lang]===undefined){
          Langs[lang]=true;
        }
      })
    })

    return {
      GENRES:Object.keys(Genres),
      LANGS:Object.keys(Langs),
      COUNTRIES:Object.keys(Countries)
    }
    
  
  }, [MOVIES.data])


  if(MOVIES.isLoading)
  return <div className="text-green-400 text-2xl text-center font-semibold">Wait WE Are Fetching</div>
  if(MOVIES.error)
  return <div className="text-red-400 text-2xl text-center font-semibold">Something Went Wrong</div>
  return (
  <div className="p-4">
    <Filters filter={filter} setFilter={setFilter} FILTERS={FILTERS}/>
    <MoiveApp data={data}/>
  </div>
  );
}

export default App;
