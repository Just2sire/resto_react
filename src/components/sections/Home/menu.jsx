import { useCallback, useEffect, useState } from "react";
import useFetch from "../../myHook/useFetch";

const Menu = () => {
    const [menu, setMenu] = useState(null);
    const [error, setError] = useState(null);
    // const {error, data} = useFetch("http://localhost:1000/food/menu");
    useEffect(() => {
        fetch('http://localhost:1000/food/menu')
        .then(res => {return res.json()})
        .then(data => { setMenu(data)})
        .catch(err => { setError(err.message) })
    });

    return ( 
        <section className="menu" id="menu">

            <div className="heading">
                <span>Menu</span>
                <h3>our top dishes</h3>
            </div>

            <div className="box-container">

                {
                    menu ? 
                    menu.map(({name, price, img, link}, id) => (
                        <a href={link} className="box" key={id}>
                            <img src={img} alt="" />
                            <div className="content">
                                <h3>{name}</h3>
                                <div className="price">{price} XOF</div>
                            </div>
                        </a>
                    )) : <h3 style={{textAlign: "center"}}>Loading...</h3> 
                }

            </div>

        </section>
    );
}
 
export default Menu;