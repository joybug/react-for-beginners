import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";



function Detail(){

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const {id} = useParams();
    const getMovie = async ()=>{
        const json = await( 
           await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`) 
        ).json();

        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(()=>{
        getMovie();
    },[]);

    console.log(movie);
  
    return (
      <div>{ loading?(
      <h1>Loading...</h1>
      ):(<div>

          <MovieDetails 
           key={movie.id}
           id={movie.id}
           coverImg={movie.large_cover_image} 
           title={movie.title_long} 
           summary={movie.description_full} 
           genres={movie.genres} 
          />

        </div>
        )}
       </div>
    );

}

export default Detail;