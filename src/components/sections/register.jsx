import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NotifContext } from '../myHook/notif';
// import UsePost from '../myHook/usePost';
const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const name = useRef();
    const mail = useRef();
    const number = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const { showNotif } = useContext(NotifContext);

    const HandleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            username: name.current.value,
            email: mail.current.value,
            number: number.current.value,
            password: password.current.value,
        };

        fetch('http://localhost:1000/auth/register', 
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
            // localStorage.setItem('user_data', JSON.stringify(user_data));
            // showNotif(data.success);
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

            {
                !isLoading ?
                <form onSubmit={HandleSubmit}>
                    <h3>Inscription</h3>
                    <input type="text" name="name" ref={name} placeholder="Votre nom" className="box" required />
                    <input type="email" name="email" ref={mail} placeholder="Votre mail" className="box" required />
                    <input type="tel" name="number" ref={number} placeholder="Votre numéro" className="box" required />
                    <input type="password" name="password" ref={password} placeholder="Votre mot de passe" className="box" required />
                    { error && <div className="alert alert-danger">{ error }</div> }
                    { success && <div className="alert alert-success">{ success }</div> }
                    <input type="submit" value="S'inscrire" className="btn" />
                    {/* <p>Mot de passe oublié? <Link to="/">Cliquez ici</Link></p> */}
                    <p>Déjà un compte? <Link to="/login">Se connceter</Link></p>
                </form> :
                <div id="loader" class="loader-container">
                    <div class="loader"></div>
                </div>
            }
            

        </div>
    );
}
 
export default Register;