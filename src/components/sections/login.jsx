import axios from 'axios';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
    const email = useRef();
    const password = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const authToken = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        toast.success("Vous vous etes déconnecté", {
            autoClose: 1000
        })
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const id = toast.loading("En cours de connexion", {
            theme: 'light',
            pauseOnHover: false
        })
        const data = {
            email: email.current.value,
            password: password.current.value,
        };

        /*fetch('http://localhost:1000/auth/login',
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
                navigate('/login');
            }, 1000);
            localStorage.setItem('token', data.token);
            // console.log(localStorage.getItem('token'));
        })
        .catch(err => {
            setError(err.msg);
            toast.error("Erreur lors de la connexion", {
                autoClose: 1000
            })
        });*/

        axios.post("http://localhost:1000/auth/login", data, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) => {
            setSuccess(res.data.success);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.userId);
            // toast.success(success, {
            //     autoClose: 1000
            // });
            toast.update(id, { render: success, type: "success", isLoading: false, autoClose: 3000 });
            setTimeout(() => {
                navigate(-1);
            }, 1000);
        }).catch(err => {
            // toast.error(err.message, {
            //     autoClose: 1000
            // })
            toast.update(id, { render: err.message, type: "error", isLoading: false, autoClose: 1000 });
        });

        setIsLoading(false);

    };

    return (
        <div className="login-form-container active">

            {(!authToken && !isLoading) ? (
                <form onSubmit={handleSubmit}>
                    <h3>Connexion</h3>
                    <input type="email" name="" ref={email} placeholder="Votre mail" className="box" />
                    <input type="password" name="" ref={password} placeholder="Votre mot de passe" className="box" />
                    {/* 
                        <div className="remember">
                            <input type="checkbox" name="" id="remember-me" />
                            <label htmlFor="remember-me">Se souvenir de moi</label>
                        </div> 
                    */}
                    <input type="submit" value="Se connecter" className="btn" />
                    {/* <p>Mot de passe oublié ? <Link to="/">Cliquez ici</Link></p> */}
                    <p>Pas de compte ? <Link to="/register">En créer</Link></p>
                </form>
            ) : (
                <form>
                    <button className="btn" onClick={handleLogout}>
                        Déconnexion
                    </button>
                </form>
            )}

            {isLoading && (
                <div id="loader" className="loader-container">
                    <div className="loader"></div>
                </div>
            )}

        </div>
    );
}

export default Login;