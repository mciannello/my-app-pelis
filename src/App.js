// Librerias
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// Componentes
import Contacto from './components/Contacto';
import Listado from './components/Listado';
import Login from './components/Login';
import Detalle from './components/Detalle';
import Header from './components/Header';
import Footer from './components/Footer';
import Resultados from "./components/Resultados";
import Favoritos from "./components/Favoritos";
// Estilos
import './css/bootstrap.min.css'
import './css/App.css'



function App  () {

 
  // console.log(tempMoviesInFavs)
    const addOrRemoveFromFavs=e=>{
      const favMovies =localStorage.getItem('favs');
      let tempMoviesInFavs;
      if (favMovies===null){
        tempMoviesInFavs=[];
      }else{
        tempMoviesInFavs =JSON.parse(favMovies)
    
      }
      const btn=e.currentTarget;
      // capturo al elemento padre
      const parent= btn.parentElement;
      // capturo la info de ese elemento padre s
      const imgURL = parent.querySelector('img').getAttribute('src');
      const title = parent.querySelector('h5').innerText;
      const overview = parent.querySelector('p').innerText;
      // De esta manera armo un objeto literal
        const movieData={
          imgURL, title, overview, id: btn.dataset['movieId']
        // el dataset trae atributo data del boton al que le atribui
          }

      let movieIsInArray= tempMoviesInFavs.find(oneMovie=>{
        return oneMovie.id=== movieData.id
      });

      if (!movieIsInArray){
        tempMoviesInFavs.push(movieData);
        localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
        setFavorites(tempMoviesInFavs);
        console.log('se agrego la película');
      }else{
        let moviesLeft= tempMoviesInFavs.filter(oneMovie=>{
          return oneMovie.id !== movieData.id
        });
     
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavorites(moviesLeft)
      console.log('se eliminó la Peli');
      }

    }
    // Agregaar y QUitar Favss
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favsInLocal=localStorage.getItem('favs')
    
        if(favsInLocal !== null) {
            const favsArray=JSON.parse(favsInLocal);
            setFavorites(favsArray)
        }
    },[setFavorites])
  return (
  <div className="container-fluid">
    <Header  guardado={{favorites}}/>
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="listado"  element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs}/> } />
      <Route path="contacto"  element={ <Contacto /> }/>
      <Route path="detalle"  element={ <Detalle /> }/>
      <Route path="resultados"  element={ <Resultados addOrRemoveFromFavs={addOrRemoveFromFavs}/> }/>
      <Route path="favoritos"  element={ <Favoritos guardado={{favorites}} addOrRemoveFromFavs={addOrRemoveFromFavs}/> }/>

    </Routes>
    <Footer/>
    </div>
  
    
  )
}

export default App
