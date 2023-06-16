import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <>
            <header className="header">

                <Link to="/" className="logo"> 
                    <i className="fas fa-utensils"></i> food 
                </Link>

                <nav className="navbar">
                    <Link to="/">Acceuil</Link>
                    <a href="#about">À Propos</a>
                    <a href="#popular">Populaire</a>
                    <a href="#menu">Menu</a>
                    <a href="#order">Commande</a>
                    <a href="#blogs">Blog</a>
                </nav>

                <div className="icons">
                                        
                    {/* <Link to='/menu' >
                        <div className="fas fa-bars"></div>                    
                    </Link> */}
                    <Link to='/search' >
                        <div className="fas fa-search"></div>
                    </Link>
                    <Link to='/cart' >
                        <div className="fas fa-shopping-cart"></div>
                    </Link>
                    <Link to='/login' >
                        <div className="fas fa-user"></div>
                    </Link>
                    
                </div>

            </header>
        </>
    );
}
 
export default Header;