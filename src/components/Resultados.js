import { Link, Navigate } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

function Resultados (){
    let token=sessionStorage.getItem('token');

    let query= new URLSearchParams(window.location.search);
    let keyword=query.get('keyword');

    const [palabraClave, setPalabraClave]=useState([]);

    useEffect(() => {
        const endPoint= `https://api.themoviedb.org/3/search/movie?api_key=27bb5143a45c245d456e887782d5d662&language=es-ES&query=${keyword}`;      
        
        axios.get(endPoint)
        .then(response =>{
            const keywordData= response.data.results;

            setPalabraClave(keywordData);
            // console.log(keywordData)
       
        })
        .catch(error=>{ console.log('Hubo errores, intente mas tarde');
        })
    },[keyword]);

 return(
    <>
    {!token && <Navigate to="/"/>}
    <div className="row">
        <h2>Buscaste: <em>{keyword}</em></h2>
        {palabraClave.length===0 && <h3>No hay resultados.</h3>}
        {/* Estructura base */}
       {
            palabraClave.map((oneMovie, idx) =>{
                return(
                        <div className="col-4" key={idx}>
                                    <div className="card my-4" style={{width: '22em', maxHeight:'50rem'}}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
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

export default Resultados