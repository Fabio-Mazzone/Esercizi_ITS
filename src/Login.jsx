import {useState} from "react";

export default function Login() {
    const [logged,setLogged] = useState(false);

    return (
        <div>
            <h2>Login simulato</h2>
            <p>
                {logged ? "Benvenuto nell'app" : "Effettua il login prima di continuare"}
            </p>
            { 
                logged?
                <button onClick={() => setLogged(false)}>Logout</button>
                :
                <button onClick={() => setLogged(true)}>Login</button>
            }
        </div>
    );
}