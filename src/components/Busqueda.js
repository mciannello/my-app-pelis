import { useNavigate } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';

function Busqueda (){
    // me permite navega a resultados a partir del bo´ton
    const history=useNavigate();
    const submitHandler= e =>{
        // no permite quese refresque la página
        e.preventDefault();
        // capturo lo que se escribe en el input- el keyword me toma todo el elemento, el value toma el valor que se ingresa
        const keyword= e.currentTarget.keyword.value.trim();
        
        // console.log(keyword);
    if (keyword.length === 4){
        swAlert(<h4>Debes escribir una palabra clave.</h4>);
    }else if(keyword.length <3){
        swAlert(<h2>Tienes ques escribir más de 3 caracteres</h2>);
    }else{
        // Limpio la consola
        e.currentTarget.keyword.value='';
        // Redirecciono guardando la palabra clave
        history(`/resultados?keyword=${keyword}`);
        
    }
    }


    return(
        <>
        <form role="search" className="d-flex items-center" onSubmit={submitHandler}>
            <label className="form-label mb-0 mx-2">
                <input className="form-control" name="keyword" type="search" placeholder="Escribe un palabra clave" aria-label="Search"/>
            </label>
            <button className="btn btn-info" type="submit">Buscar</button>
        </form>
        </>
    )
}

export default Busqueda;