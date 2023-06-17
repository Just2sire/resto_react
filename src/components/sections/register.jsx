import axios from 'axios';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import UsePost from '../myHook/usePost';
const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const authToken = localStorage.getItem('token');
    const name = useRef();
    const mail = useRef();
    const number = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        toast.success("Vous etes déconnecté", {
            autoClose: 1000
        });
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = toast.loading("Traitement de l'iinscription en cours", {
            theme: 'light',
            pauseOnHover: false
        });
        setIsLoading(true);
        const data = {
            username: name.current.value,
            email: mail.current.value,
            number: number.current.value,
            password: password.current.value,
        };

        /*fetch('http://localhost:1000/auth/register', 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json()) // Extraire le corps de la réponse au format JSON
        .then(response => {
            setSuccess(response.data.success);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.userId);
            toast.success(success, {
                autoClose: 1000
            });
            setTimeout(() => {
                navigate(-1) ;
            }, 1000);
        })
        .catch(err => {
            toast.error(err.message, {
                autoClose: 1500
            });
        });*/

        axios.post("http://localhost:1000/auth/register", data, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => {
            setSuccess(res.data.success);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.userId);
            // toast.success(success, {
            //     autoClose: 1000
            // });
            toast.update(id, { render: success, type: "success", isLoading: false, autoClose: 1000 });
            setTimeout(() => {
                navigate(-1) ;
            }, 1000);
        }).catch(err => {
            toast.update(id, { render: err.message, type: "error", isLoading: false, autoClose: 1000 });
            // toast.error(err.message, {
            //     autoClose: 1500
            // });
        });
        
        setIsLoading(false);
            
    };
    return ( 
        <div className="login-form-container active">

            {
                (!authToken && !isLoading) ?
                <form onSubmit={handleSubmit}>
                    <h3>Inscription</h3>
                    <input type="text" name="name" ref={name} placeholder="Votre nom" className="box" required />
                    <input type="email" name="email" ref={mail} placeholder="Votre mail" className="box" required />
                    <input type="tel" name="number" ref={number} placeholder="Votre numéro" className="box" required />
                    <input type="password" name="password" ref={password} placeholder="Votre mot de passe" className="box" required />
                    <input type="submit" value="S'inscrire" className="btn" />
                    {/* <p>Mot de passe oublié? <Link to="/">Cliquez ici</Link></p> */}
                    <p>Déjà un compte? <Link to="/login">Se connceter</Link></p>
                </form> :
                <form>
                    <button className="btn" onClick={handleLogout}>
                        Déconnexion
                    </button>
                </form>
            }
            
            {
                isLoading &&
                <div id="loader" class="loader-container">
                    <div class="loader"></div>
                </div>
            }

        </div>
    );
}
 
export default Register;