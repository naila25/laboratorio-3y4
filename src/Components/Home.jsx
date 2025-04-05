import { useContext } from "react";
import WelcomeWidget from "./WelcomeWidget";
import { AuthContext } from "../Context/AuthContext";



export default function Home() {

  const {logout} = useContext(AuthContext)

    return (
        <>
          <h2> Your at home!</h2> 
          <WelcomeWidget />
          <button onClick={logout}></button>
        </>
    );


}