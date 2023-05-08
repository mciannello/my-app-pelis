import axios from "axios";
import Swal from 'sweetalert2';
import { Navigate } from "react-router-dom";
function Login(){
    
    const submitHandler= e =>{
        e.preventDefault();
        
        // capturo los valores de los inputs
        const email = e.target.email.value;
        const password = e.target.password.value;
        // regex emailjavaScript - validar que el mail este bien escrito
        const regexEmail =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       
        if (email==='' || password===''){
            Swal.fire({
            icon:'Info',
            title:'Los campos no pueden estar vacios',
            text:'Debes ingresar los datos correspondiente para ingresar.'
               
        })            
            return;
        }

        if(email!=='' && !regexEmail.test(email)){
            Swal.fire({
                icon:'Info',
                title:'Dirección inválida',
                text:'Debes ingresar dirección de correo real.'

            })       

            return;
        }
        if(email!=='challenge@alkemy.org'|| password!=='react'){
            Swal.fire({
                icon:'error',
                title:'Credenciales Inválidas',
        

            })    
            

            return;
        }

        axios
        .post('http://challenge-react.alkemy.org',{email, password})
        .then(res=>{
            Swal.fire({
                icon:'success',
                title:'Perfecto, ingresaste correctamente',
        

            }) 
           const tokenRecibido = res.data.token;
        //  --> Se almacena el token en local storge
        sessionStorage.setItem('token', tokenRecibido);

        
        })
   
        
    }
    let token= sessionStorage.getItem('token');
return (
    <>
    {token && <Navigate to="/listado"/>}
        <div className="container-sm">
        <h2>Formulario de Login</h2>
        <form onSubmit={submitHandler} className="mb-3">
            <label className="form-label"> Correo Electrónico:</label>
            <input type="text" name="email" className="form-control"/>
            <label className="form-label"> Contraseña: </label>
            <input type="password" name="password" className="form-control"/>
        <br/>
        <button type="submit" className="btn btn-info rounded-pill px-3 col-3 ">Ingresar</button>
        </form>
        </div>
    </>
)
}

export default Login;