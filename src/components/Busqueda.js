import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
        Swal.fire({
            icon:'warning',
            title:'Debes ingresar una palabra clave',
    

        }) 
    }else if(keyword.length <3){
        Swal.fire({
            icon:'warning',
            title:'Tienes que escribir mas de 3 caractéres',
    

        }) 
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