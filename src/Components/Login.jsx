import {useContext} from "react"
import { AuthContext } from "../Context/AuthContext"
import { useUserState} from '../Hooks/useUserState'


export default function Login () {

  
    const {setUser} = useContext (AuthContext)
    const {emailRef,passwordRef,error, login, setError } = useUserState()
    

    const handleLogin = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const isSuccess = login(email, password);
        if(!isSuccess)   
        {  //si no esta autenticado da un error 
            setError("Credenciales incorrectas");
        }
        else
        {
          console.log("Set User State")
          setUser(email)
        }
        
        
    }


    return (
      <>        
              <h2>Login</h2>  
            {
            
             (<div>
                <input 
                type="email"
                placeholder='Correo'
                ref={emailRef}
                />
                <br/>
                <input
                type="password"
                placeholder='Contraseña'
                ref={passwordRef}
                />
                <br/>
                <button onClick={handleLogin}>Ingresar</button>
                { error && <p style={{ color: "red" }}>{error}</p> }
              </div> ) 

            }  

                        
      </>

    )
}