import axios from "axios";
import swAlert from '@sweetalert/with-react';
function Login(){

    const submitHandler= e =>{
        e.preventDefault();
        
        // capturo los valores de los inputs
        const email = e.target.email.value;
        const password = e.target.password.value;
        // regex emailjavaScript - validar que el mail este bien escrito
        const regexEmail =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       
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

        // axios
        // .post('https://localhost:3000',{email, password})
        // .then(res=>{
        //     swAlert(
        //      <h2>Perfecto, ingresaste correctamente!</h2>
        //     )         
        // const tokenRecibido = res.data.token;
        // //  --> Se almacena el token en local storge
        // localStorage.setItem('token', tokenRecibido);

        
        // })

    }
return (
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
)
}

export default Login;