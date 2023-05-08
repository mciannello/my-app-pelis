// import { useState, useEffect } from "react";
// }
import { Navigate } from "react-router-dom"
function Favoritos({addOrRemoveFromFavs, guardado}){
    let token= sessionStorage.getItem('token');
    return(
        <>
        <h2> Sección Favoritos</h2>
        {!token && <Navigate to="/"/>}
    <div className="row">
      {!guardado.favorites.length && <h5 className="col-12 text-danger">No se pudo encontrar nada favoritos</h5>}
        {
        guardado.favorites.map((oneMovie, idx) =>{
                return(
                    <div className="col-5" key={idx}>
                                <div className="card my-4" style={{width: '25rem', maxHeight:'50rem'}}>
                                <img src={oneMovie.imgURL} className="card-img-top" alt="..."/>
                                <button className="favorite-btn" onClick={addOrRemoveFromFavs} data-movie-id={oneMovie.id}>🤍</button>
                                <div className="card-body">
                                <h5 className="card-title">{oneMovie.title.substring(0,30)}...</h5>
                                <p className="card-text">{oneMovie.overview.substring(0,120)}...</p>
                                {/* <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">Ver detalle</Link> */}
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
export default Favoritos