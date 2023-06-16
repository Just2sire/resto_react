import Acceuil from "./Home/home";
import Categorie from "./Home/categorie";
import About from "./Home/about";
import Popular from "./Home/popular";
import Banner from "./Home/banner";
import Menu from "./Home/menu";
import Order from "./Home/order";
import Blog from "./Home/blog";

const Home = ({data}) => {
    return ( 
        <>
            <Acceuil />
            <Categorie />
            <About about={data.about} />
            <Popular />
            <Banner offres={data.offres} />
            <Menu menus={data.foods} />
            <Order />
            <Blog />
        </>
    );
}
 
export default Home;