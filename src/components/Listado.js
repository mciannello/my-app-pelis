// falta el navigate
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Listado(addOrRemoveFromFavs){

    // let token= sessionStorage.getItem('token');
    const [movieList, setMovieList] =useState([]);
    
    useEffect(()=>{
        const endPoint='https://api.themoviedb.org/3/discover/movie?api_key=27bb5143a45c245d456e887782d5d662&language=es-ES&page=1';
        axios.get(endPoint)
        .then(response =>{
            const apiData=response.data
            setMovieList(apiData.results);
        })
        // catch captura los errores
        .catch(error=>{
            Swal.fire({
                icon:'error',
                title:'Hubo errores, intente más tarde.',
        
    
            }) 
        })
    }, [setMovieList]);
    // console.log(movieList)
return(
    <>
    {/* {!token && <Navigate to="/"/>} */}
    <div className="row">
        {/* Estructura base */}
        {
            movieList.map((oneMovie, idx) =>{
                return(
                    <div className="col-3" key={idx}>
                                <div className="card my-4" style={{width: '18rem', maxHeight:'50rem'}}>
                                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                                <button className="favorite-btn" onClick={addOrRemoveFromFavs.addOrRemoveFromFavs} data-movie-id={oneMovie.id}>🤍</button>
                                <div className="card-body">
                                <h5 className="card-title">{oneMovie.title.substring(0,30)}...</h5>
                                <p className="card-text">{oneMovie.overview.substring(0,120)}...</p>
                                <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">Ver detalle</Link>
                                </div>
                            </div>
                    </div>
                    
                )
            })
        }
     </div>   
</>
)
}

export default Listado