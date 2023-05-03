// import axios from "axios";
import swAlert from '@sweetalert/with-react';
function Login(){

    const submitHandler= e =>{
        e.preventDefault();
       
        // capturo los valores de los inputs
        const email = e.target.email.value;
        const password = e.target.password.value;
        // regex emailjavaScript - validar que el mail este bien escrito
        const regexEmail =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
       
        if (email==='' || password===''){
            swAlert(
                <div>
                    <h2>Los campos no pueden estar vacios</h2>
                    <p>Debes ingresar los datos correspondiente para ingresar</p>
                </div>
            )            
            return;
        }

        if(email!=='' && !regexEmail.test(email)){
            swAlert(
                <div>
                    <h2>Dirección inválida</h2>
                    <p>Debes ingresar dirección de correo real</p>
                </div>
            )                    
            return;
        }
        if(email!=='mciannello@gmail.com'|| password!=='react'){
            swAlert(
               <h2>Credenciales Inválidas</h2>
            )   ;      
            return;
        }

        axios
        .post('https://challenge-react.alkemy.org',{email, password})
        .then(res=>{
            swAlert(
             <h2>Perfecto, ingresaste correctamente!</h2>
            )         
        const tokenRecibido = res.data.token;
        //  --> Se almacena el token en local storge
        localStorage.setItem('token', tokenRecibido);

        
        })

    }
return (
    <>
    <h2>Formulario de Login</h2>
    <form onSubmit={submitHandler}>
        <label>
            <span>Correo Electrónico:</span>  <br/>
        <input type="text" name="email"/>
        </label>
        <br/>
        <label>
        <span>Contraseña:</span>  <br/>
        <input type="password" name="password"/>
        </label>
        <br/>
    <button type="submit">Ingresar</button>
    </form>
    </>
)
}

export default Login;