
'use client'
import { AuthContext } from "@/app/layout";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const Header = () => {

  const { state: { isAuthenticated } , dispatch} = useContext(AuthContext);

  console.log({isAuthenticated})
 

  const router = useRouter();

  const handleLogin = () => {
    window.location = `http://localhost:4000/auth/google`
  }

  const handleLogout = () => {
    dispatch ({type: 'LOGOUT'})
  }

  
  return (
    <div
      className="df aic jcsb w100p p5 "
      style={{
        backgroundColor: "var(--blackDark)",
        boxShadow: "0 2px 15px rgba(0,0,0,0.5)",
      }}
    >
      <h1 className= "cursorp " onClick={() => router.back()}> 🧠 </h1>
  {!isAuthenticated && <button onClick={handleLogin}>Iniciar sesion </button>}
  {isAuthenticated && <button onClick={handleLogout}>Cerrar sesion </button>}
    </div>
  );
};

export default Header;
