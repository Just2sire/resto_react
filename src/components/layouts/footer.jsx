import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <>
            <section className="footer">
                <div className="newsletter">
                    <h3>newsletter</h3>
                    <form action="">
                        <input type="email" name="" placeholder="enter your email" id=""/>
                        <input type="submit" value="subscribe"/>
                    </form>
                </div>

                <div className="box-container">

                    <div className="box">
                        <h3>our menu</h3>
                        <a href="/"><i className="fas fa-arrow-right"></i> pizza</a>
                        <a href="/"><i className="fas fa-arrow-right"></i> burger</a>
                        <a href="/"><i className="fas fa-arrow-right"></i> chicken</a>
                        <a href="/"><i className="fas fa-arrow-right"></i> pasta</a>
                        <a href="/"><i className="fas fa-arrow-right"></i> and more...</a>
                    </div>

                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#home"> <i className="fas fa-arrow-right"></i> home</a>
                        <a href="#about"> <i className="fas fa-arrow-right"></i> about</a>
                        <a href="#popular"> <i className="fas fa-arrow-right"></i> popular</a>
                        <a href="#menu"> <i className="fas fa-arrow-right"></i> menu</a>
                        <a href="#order"> <i className="fas fa-arrow-right"></i> order</a>
                        <a href="#blogs"> <i className="fas fa-arrow-right"></i> blogs</a>
                    </div>

                    <div className="box">
                        <h3>extra links</h3>
                        <Link href="/"> <i className="fas fa-arrow-right"></i> my order</Link>
                        <Link href="/"> <i className="fas fa-arrow-right"></i> my account</Link>
                        <Link href="/"> <i className="fas fa-arrow-right"></i> my favorite</Link>
                        <Link href="/"> <i className="fas fa-arrow-right"></i> terms of use</Link>
                        <Link href="/"> <i className="fas fa-arrow-right"></i> privary policy</Link>
                    </div>

                    <div className="box">
                        <h3>opening hours</h3>
                        <p>monday : 7:00am to 10:00pm</p>
                        <p>tuesday : 7:00am to 10:00pm</p>
                        <p>wednesday : 7:00am to 10:00pm</p>
                        <p>friday : 7:00am to 10:00pm</p>
                        <p>saturday and sunday closed</p>
                    </div>

                </div>

                <div className="bottom">

                    <div className="share">
                        <a href="/facebook.com" className="fab fa-facebook-f"></a>
                        <a href="/twitter.com" className="fab fa-twitter"></a>
                        <a href="/instagram.com" className="fab fa-instagram"></a>
                        <a href="/linkedin.com" className="fab fa-linkedin"></a>
                        <a href="/pinterest.com" className="fab fa-pinterest"></a>
                    </div>

                    <div className="credit"> created <span>Coding™</span> | all rights reserved! </div>

                </div>

            </section>
        </>
     );
}
 
export default Footer;