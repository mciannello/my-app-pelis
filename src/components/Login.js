import axios from "axios";

function Login(){

    const submitHandler= e =>{
        e.preventDefault();
       
        // capturo los valores de los inputs
        const email = e.target.email.value;
        const password = e.target.password.value;
        // regex emailjavaScript - validar que el mail este bien escrito
        const regexEmail =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
       
        if (email==='' || password===''){
            console.log('los campos no pueen estar vacios')
            return;
        }

        if(email!=='' && !regexEmail.test(email)){
            console.log('Debes escribir una dire valida')
            return;
        }
        if(email!=='mciannello@gmail.com'|| password!=='react'){
            console.log('Credenciales inválidas');
            return;
        }
        console.log('estamos listos para enviar la info')
        // axios
        // .post('url donde hace la peticion',{email, password})
        // .then(res=>{
        //     console.log(res.data);
        // })
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