import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";


// const fetchFood = createAsyncThunk('cart/fetchFood', async (id) => {
//     const dispatch = useDispatch();
//     const panier = useSelector((state) => state.cart);
//     const exist = panier.some(item => item.id === id);

//     if (exist) {
//         // Si le produit existe déjà dans le panier, mettre à jour la quantité
//         dispatch(updateCart({id, quantite: 0}))
//     } else {
//       // Si le produit n'existe pas dans le panier, l'ajouter avec une quantité de 1
//         try {
//             const id = toast.loading("En cours d'ajout du produit au panier", {
//                 theme: 'light',
//                 pauseOnHover: false
//             })
//             const response = await axios.get(`http://localhost:1000/food/menu/${id}`);
//             //do something else
//             toast.update(id, { render: "Données récupérés avec succès", type: "success", isLoading: false });
//             // toast.success("Données récupérés avec succès");
//             return response.data;
//         } catch (error) {
//             // toast.error("Erreur lors de la récupération des données");
//             toast.update(id, { render: "Erreur lors de la récupération des données", type: "error", isLoading: false });
//             throw error.message;
//         }
//     }
// })

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
      addCart: (state, action) => {
        const data = action.payload;
        const price = data.promotionalPrice ? data.promotionalPrice : data.price;
        const newToCart = {
          _id: data._id,
          name: data.name,
          price,
          img: data.img,
          quantite: 1,
        };
        state.push(newToCart);
        toast.success("Produit ajouté avec succès au panier", {
          autoClose: 1500,
          pauseOnHover: false,
        });
      },
      updateCart: (state, action) => {
        let plat = state.find((t) => t._id === action.payload._id);
        plat.quantite = action.payload.quantite;
        toast.success("Produit mis à jour avec succès", {
            autoClose: 1500,
            theme: 'light',
            pauseOnHover: false
        });
        return state;
      },
      deleteCart: (state, action) => {
        state = state.filter((item) => item._id !== action.payload);
        toast.warn("Produit supprimé avec succès", {
          autoClose: 1500,
          theme: 'light',
          pauseOnHover: false
        });
        return state;
      },
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(fetchFood.pending, (state, action) => {
    //       state.loading = true;
    //       state.error = null;
    //     })
    //     .addCase(fetchFood.fulfilled, (state, action) => {
    //       const newProduct = {};
    //       state.loading = false;
    //       state.data.push(newProduct);
    //     })
    //     .addCase(fetchFood.rejected, (state, action) => {
    //       state.loading = false;
    //       state.error = action.error.message;
    //     });
    // },
  });
  

export const { addCart, updateCart, deleteCart } = cartSlice.actions;
export default cartSlice;