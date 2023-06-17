import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addCart } from '../../../slices/cartSlice';

const Popular = () => {
    const dispacth = useDispatch();
    const [menu, setMenu] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // setIsLoading(true);
        axios.get('http://localhost:1000/food/menu').
        then((res) => setMenu(res.data))
        .catch((err) => { setError(err.message) });
        setIsLoading(false);
    }, []);
    return ( 
        <section className="popular" id="popular">

            <div className="heading">
                <span>popular food</span>
                <h3>our special dishes</h3>
            </div>

            <div className="box-container">

                {
                    menu && 
                    menu.map(({_id, name, price, img, link, promotionalPrice}, id) => (
                        <div className="box" key={id}>
                            <a href={link} className="fas fa-heart"> </a>
                            <div className="image">
                                <img src={img} alt="" />
                            </div>
                            <div className="content">
                                <h3>{name}</h3>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div className="price">{promotionalPrice ? <>{promotionalPrice} <span>{price} XOF</span></>  : price+' XOF'} </div>
                                <button onClick={() => {dispacth(addCart({_id, name, price, img, promotionalPrice}))}} className="btn">Ajouter au panier</button>
                            </div>
                        </div>
                    ))
                }

                {
                    isLoading && 
                    (<div className='loader-container'>
                        <div className="loader"></div>
                    </div> )
                }

                {
                    error && toast.error(error)
                }

            </div>

        </section>
    );
}
 
export default Popular;