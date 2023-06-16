import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NotifContext } from '../myHook/notif';
const Login = () => {
    const email = useRef();
    const password = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { showNotif } = useContext(NotifContext);

    const authToken = localStorage.getItem('token');
    console.log("AuthToken: ",  authToken);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            email: email.current.value,
            password: password.current.value,
        };

        fetch('http://localhost:1000/auth/login', 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json()) // Extraire le corps de la réponse au format JSON
        .then(data => {
            setSuccess(data.success);
            console.log(data);
            // const token = {token: data.token};
            setTimeout(() => {
                navigate('/login') ;
            }, 1000); 
            localStorage.setItem('token', data.token);
            showNotif(data.success);
            // console.log(localStorage.getItem('token'));
        })
        .catch(err => {
            setError(err.msg);
            showNotif(err.msg);
        });
        
        setIsLoading(false);
            
    };
    return ( 
        <div className="login-form-container active">

            {typeof authToken !== null ? (
            !isLoading ? (
                <form onSubmit={HandleSubmit}>
                <h3>Connexion</h3>
                <input type="email" name="" placeholder="Votre mail" className="box" />
                <input type="password" name="" placeholder="Votre mot de passe" className="box" />
                {/* <div className="remember">
                    <input type="checkbox" name="" id="remember-me" />
                    <label htmlFor="remember-me">Se souvenir de moi</label>
                </div> */}
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <input type="submit" value="Se connecter" className="btn" />
                <p>Mot de passe oublié ? <Link to="/">Cliquez ici</Link></p>
                <p>Pas de compte ? <Link to="/register">En créer</Link></p>
                </form>
            ) : (
                <div id="loader" className="loader-container">
                <div className="loader"></div>
                </div>
            )
            ) : (
            <form>
                <button className="btn" onClick={handleLogout}>
                Déconnexion
                </button>
            </form>
            )}


            {/* { authToken != null ?
                (
                    !isLoading ?
                        <form onSubmit={HandleSubmit} >
                            <h3>Connexion</h3>
                            <input type="email" name="" placeholder="Votre mail" className="box" />
                            <input type="password" name="" placeholder="Votre mot de passe" className="box" />
                            { error && <div className="alert alert-danger">{ error }</div> }
                            { success && <div className="alert alert-success">{ success }</div> }
                            <input type="submit" value="Se connceter" className="btn" />
                            <p>Mot de passe oublié? <Link to="/">Cliquez ici</Link></p>
                            <p>Pas de compte? <Link to="/register">En crée</Link></p>
                        </form> :
                    <div id="loader" class="loader-container">
                        <div class="loader"></div>
                    </div>
                ) :
                (<form>
                    <button className='btn' onClick={handleLogout} >Déconnexion</button>
                </form>)
            } */}

        </div>
    );
}
 
export default Login;