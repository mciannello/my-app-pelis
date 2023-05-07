import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";


function Detalle (){
    let token=sessionStorage.getItem('token');
    let query= new URLSearchParams(window.location.search);
    // Guardo el movieID que viene de Listado guardado en URL
    let movieID=query.get('movieID');
    const [movie, setMovie]=useState(null);
    // Hago el llamado a al API
    useEffect(() => {
        const endPoint=`https://api.themoviedb.org/3/movie/${movieID}?api_key=27bb5143a45c245d456e887782d5d662&language=es-ES`;
        // console.log(endPoint)
        axios.get(endPoint)
        .then(response =>{
            const movieData= response.data;
            setMovie(movieData);

        })
        .catch(error=>{
        console.log('Hubo errores, intente mas tarde');
        })
    },[movieID]);

    return(
        <>

{!token && <Navigate to="/"/>}
{/* se puede agregar u spiner */}
{!movie && <p>Cargando...</p>}
{movie && 
        <div className="container" >
            <h2>{movie.title}</h2>
           
            <div className="row">
                <div className="col-4">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="MOvie Poster"/>

                </div>
                <div className="col-8">
                    
                    <h5>Título Original: {movie.original_title}</h5>
                    <h5>Fecha de estreno: {movie.release_date}</h5>
                    <h4>{movie.tagline}</h4>
                    <h5>Reseña:</h5>
                    <p>{movie.overview}</p>
                    <h5>Puntaje: {movie.vote_average}</h5>
                    <h5>Géneros:</h5>
                    <ul>
                        {/* es necesario un map porque el array es un elemento */}
                    {movie.genres.map(oneGenre=><li key={oneGenre.id}>{oneGenre.name}</li>)}
                    </ul>
                    
                    <h5>Enlace:</h5>
                    <p>{movie.homepage}</p>
                </div>
            </div>
    </div>
    }
    </>
    )
}
export default Detalle;