import { useSelector, useDispatch } from 'react-redux';
import { updateCart, deleteCart } from '../../slices/cartSlice';
import { toast } from 'react-toastify';


const Cart = () => {
  const panier = useSelector(state => state.cart);
  const dispatch = useDispatch();
  // const [cartItems, setCartItems] = useState([
  //   {
  //       "name": "Delicious Food",
  //       "price": 5000,
  //       "img": "image/menu-1.png",
  //       "quantite": 0
  //   },
  //   {
  //       "name": "Delicious Food",
  //       "price": 5000,
  //       "img": "image/menu-2.png",
  //       "quantite": 0
  //   },
  //   {
  //       "name": "Delicious Food",
  //       "price": 5000,
  //       "img": "image/menu-3.png",
  //       "quantite": 0
  //   },
  //   {
  //       "name": "Delicious Food",
  //       "price": 5000,
  //       "img": "image/menu-4.png",
  //       "quantite": 0
  //   },
  //   {
  //       "name": "Delicious Food",
  //       "price": 5000,
  //       "img": "image/menu-5.png",
  //       "quantite": 0
  //   }
  // ]);

  // Ajouter un produit au panier
  

  // Supprimer un produit du panier
  

  // Calculer le total du panier
  
  const verification = (value) => {
    return (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']).includes(value) ? parseInt(value) : 0
  }

  const calculateTotal = () => {
    if(typeof panier != 'undefined') {
      const total = panier.reduce((acc, item) => acc + (item.price * item.quantite), 0);
      return total.toFixed(2);
    }
    return 0.00;
  };

  return (
    <>
      <section className="shopping-cart-container active">

        <div className="products-container">

          <h3 className="title">Vos produits</h3>
            <div className="box-container">
            <>
                { (panier.length !== 0) ?
                  panier.map(({_id, price, img, name, quantite}, id) => (
                    
                    <div className="box" key={id} >
                        <i className="fas fa-times" onClick={() => dispatch(deleteCart(id))}></i>
                        <img src={img} alt="" />
                        <div className="content">
                            <h3>{name}</h3>
                            <span> Quantité : </span>
                            <input type="number" name="" value={quantite} min={1} id="" onChange={(e) => { dispatch(updateCart({id, quantite: verification(e.target.value)})) } } />
                            <br/>
                            <span> Prix : </span>
                            <span className="price">{price} XOF </span>
                        </div>
                    </div>
                  )) : <h1 style={{ textAlign: 'center' }}> Panier vide</h1>
                }

              </>
            </div>
          </div>

        <div className="cart-total">
          <h3 className="title"> Panier Total </h3>

          <div className="box">

              {/* <h3 className="subtotal"> subtotal : <span>{calculateTotal()} XOF</span> </h3> */}
              <h3 className="total"> Total : <span>{calculateTotal()} XOF</span> </h3>
              {/* Autres éléments d'interface utilisateur, options de paiement, etc. */}

              <button onClick={ () => {toast("Commande passé avec succès")}} className="btn">Passer à l'achat</button>

          </div>
        </div>

      </section>
    </>
  );
};
export default Cart;