import cat1 from '../../../image/cat-1.png';
import cat2 from '../../../image/cat-2.png';
import cat3 from '../../../image/cat-3.png';
import cat4 from '../../../image/cat-4.png';
import cat5 from '../../../image/cat-5.png';
import cat6 from '../../../image/cat-6.png';

const Categorie = () => {
    return ( 
        <section className="category">

            <a href="/" className="box">
                <img src={cat1} alt="" />
                <h3>combo</h3>
            </a>

            <a href="/" className="box">
                <img src={cat2} alt="" />
                <h3>pizza</h3>
            </a>

            <a href="/" className="box">
                <img src={cat3} alt="" />
                <h3>burger</h3>
            </a>

            <a href="/" className="box">
                <img src={cat4} alt="" />
                <h3>chicken</h3>
            </a>

            <a href="/" className="box">
                <img src={cat5} alt="" />
                <h3>dinner</h3>
            </a>

            <a href="/" className="box">
                <img src={cat6} alt="" />
                <h3>coffee</h3>
            </a>

        </section>
    );
}
 
export default Categorie;