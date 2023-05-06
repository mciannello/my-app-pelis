// falta el navigate
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
function Listado(){
    // let token= localStorage.getItem('token');
    const [movieList, setMovieList] =useState([]);
    useEffect(()=>{
        const endPoint='https://api.themoviedb.org/3/discover/movie?api_key=27bb5143a45c245d456e887782d5d662&language=es-ES&page=1';
        axios.get(endPoint)
        .then(response =>{
            const apiData=response.data
            setMovieList(apiData.results);
        })
    }, [setMovieList]);
    console.log(movieList)
return(
    <>
    {/* {!token && <Navigate to="/"/>} */}
    <div className="row">
        {/* Estructura base */}
        <div className="col-3">
            <div className="card" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Peli 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-primary">Ver detalle</Link>
            </div>
        </div>
    </div>
</div>
</>
)
}

export default Listado