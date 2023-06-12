import { Link } from 'react-router-dom'
import {users} from '../placeholderdata/users.json'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Login({userName, onChangeUser}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    const submitLogin = (event) => {
        event.preventDefault();
        
        const user = users.find((user) => user.name === username || user.email === username);

        if (user && user.password === password) {
            setLoginError(false)
            onChangeUser(user.name)
            navigate('/')
        } else {
            setLoginError(true);
        }
    }

    return(
        <div className="w-screen h-screen grid bg-gray-200 font-rubik">
            <form onSubmit={submitLogin} className="place-self-center flex flex-col items-center rounded-sm border-2 w-2/4 h-screen">
                <Link to='/'>
                    <img src="https://i.ibb.co/4M3W5Vp/Logo.png" className="w-40 h-16 hover:cursor-pointer mt-4"/>
                </Link>
                <strong className="text-xl mt-8">Iniciar sesión</strong>
                <input name="identifier" 
                type="text" 
                className="w-1/2 h-8 mt-2 border-2 border-gray-400 outline-blue-500 rounded-sm pl-4 text-gray-600" 
                placeholder="Nombre de usuario o email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                ></input>
                <input name="password" 
                type="text" 
                className="w-1/2 h-8 mt-2 border-2 border-gray-400 outline-blue-500 rounded-sm pl-4 text-gray-600" 
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
                <h2 className="mt-2">¿Olvidó su contraseña?</h2>
                {loginError && <p>Invalid username or password</p>}
                <button type="submit" className="divide-y-4 w-2/4 h-12 mt-2 items-center bg-white hover:border-blue-500 hover:text-blue-500 border-2 border-gray-400">
                    <strong>
                        Iniciar Sesión
                    </strong>
                </button>
                <hr className="mt-8 w-3/4 flex flex-row border border-gray-300"/>
                <h2 className="mt-8">¿Nuevo en Billet?</h2>
                <button className="w-2/4 h-12 flex flex-row items-center bg-white hover:border-blue-500 hover:text-blue-500 border-2 border-gray-400">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
                    className="h-8 ml-8 justify-self-center"/>
                    <strong className="mr-6 justify-self-center grow">Registrarse con Google</strong>
                </button>
            </form>
        </div>
    )
}

export default Login;